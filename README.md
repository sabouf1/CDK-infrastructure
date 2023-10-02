# AWS CDK Classic Infrastructure Template

This repository contains an AWS Cloud Development Kit (CDK) project that defines and provisions classic infrastructure components on AWS. This CDK stack creates a Virtual Private Cloud (VPC), an EC2 instance, an SQS queue, an SNS topic, and a Secrets Manager secret.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [CDK Stack Details](#cdk-stack-details)
- [Deployment](#deployment)
- [Resources](#resources)
- [License](#license)

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CDK](https://aws.amazon.com/cdk/)

You also need to configure your AWS credentials using `aws configure` or other suitable methods.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sabouf1/aws-cdk-classic-infra-template.git
   ```

2. Change your working directory to the cloned repository:

   ```bash
   cd aws-cdk-classic-infra-template
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Modify the CDK stack code in the `lib/aws-cdk-classic-infra-template-stack.ts` file to customize the infrastructure components as needed.

## CDK Stack Details

The CDK stack defined in this project creates the following AWS resources:

- Virtual Private Cloud (VPC)
  - CIDR block: `10.30.0.0/16`
  - 3 Availability Zones (AZs)
  - 1 NAT Gateway

- Amazon EC2 Instance
  - Amazon Linux 2 AMI
  - T2 Micro instance type
  - Security group allowing inbound traffic

- Amazon SQS Queue

- Amazon SNS Topic

- AWS Secrets Manager Secret
  - Secret name: `metrodb-secrets`
  - Secret string template with a generated password

- IAM Role for the EC2 instance with permissions to access the Secrets Manager secret

## Deployment

To deploy the CDK stack and create the infrastructure, follow these steps:

1. Bootstrap the CDK if you haven't already (only needed once per AWS account/region):

   ```bash
   cdk bootstrap
   ```

2. Deploy the CDK stack:

   ```bash
   cdk deploy
   ```

3. After the deployment is complete, you will see the output with information about the created resources.

## Resources

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/latest/)
- [AWS CDK Examples](https://github.com/aws-samples/aws-cdk-examples)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
