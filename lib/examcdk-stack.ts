import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a VPC
    const vpc = new ec2.Vpc(this, 'MyVPC', {
      cidr: '10.30.0.0/16',
      maxAzs: 3, // Change this as needed
      natGateways: 1,
    });

    // Create a Security Group for the EC2 instance
    const securityGroup = new ec2.SecurityGroup(this, 'MyEC2SecurityGroup', {
      vpc,
    });

    // Create an EC2 instance in the public subnet
    const ec2Instance = new ec2.Instance(this, 'MyEC2Instance', {
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      securityGroup,
      machineImage: ec2.MachineImage.latestAmazonLinux({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 }),
    });

    // Create an SQS Queue
    const queue = new sqs.Queue(this, 'MyQueue');

    // Create an SNS Topic
    const topic = new sns.Topic(this, 'MyTopic');

    // Create AWS Secrets Manager Secret
    const secret = new secretsmanager.Secret(this, 'MySecret', {
      secretName: 'metrodb-secrets',
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'my-username' }),
        generateStringKey: 'password',
        passwordLength: 12,
      },
    });

    // Grant necessary permissions to resources
    ec2Instance.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['secretsmanager:GetSecretValue'],
        resources: [secret.secretArn],
      })
    );

    // queue.grantSendMessages(topic);
  }
}

// const app = new cdk.App();
// new MyCdkStack(app, 'MyCdkStack');
