# My CDK Stack

This is a Git repository that contains AWS Cloud Development Kit (CDK) code for creating and managing AWS resources using TypeScript. The CDK stack defined in this repository creates a set of AWS resources, including a Virtual Private Cloud (VPC), an EC2 instance, an Amazon Simple Queue Service (SQS) queue, an Amazon Simple Notification Service (SNS) topic, and an AWS Secrets Manager secret. 

## Prerequisites

Before you can use this CDK stack, you'll need the following prerequisites:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your development machine.
- An AWS account with the necessary permissions and credentials configured.

## Installation

To get started with this CDK stack, follow these steps:

1. Clone this Git repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Change into the project directory:

   ```bash
   cd <repository-directory>
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## Usage

You can deploy the CDK stack to your AWS environment by using the following commands:

1. Bootstrap the CDK environment (if you haven't already done so):

   ```bash
   cdk bootstrap
   ```

2. Deploy the CDK stack:

   ```bash
   cdk deploy
   ```

This will create the specified AWS resources defined in the `MyCdkStack` class within the `lib/my-cdk-stack.ts` file.

## Configuration

The CDK stack is defined in the `MyCdkStack` class, and it creates the following AWS resources:

- **VPC**: A Virtual Private Cloud with a specified CIDR range and NAT gateways.

- **Security Group**: An EC2 Security Group associated with the VPC.

- **EC2 Instance**: An EC2 instance launched within the VPC, with a specific instance type and Amazon Machine Image (AMI).

- **SQS Queue**: An Amazon SQS queue.

- **SNS Topic**: An Amazon SNS topic.

- **Secrets Manager Secret**: An AWS Secrets Manager secret with a predefined username and a generated password.

The CDK stack also grants the EC2 instance permissions to access the Secrets Manager secret.

You can customize the configuration of these resources by modifying the code in the `MyCdkStack` class.

## Cleanup

To remove the AWS resources created by this CDK stack, you can run the following command:

```bash
cdk destroy
```

This will delete the stack and its associated resources.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This CDK stack was created using the AWS Cloud Development Kit (CDK) and AWS CDK libraries for TypeScript. Special thanks to the AWS CDK community and contributors for making infrastructure as code easy and efficient.
