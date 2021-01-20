import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cloudwatch from '@aws-cdk/aws-cloudwatch';

export class AwsAlarmsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Metric class
    const metric = new cloudwatch.Metric({
      namespace: 'AWS/EC2',
      metricName: 'CPUUtilization',
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
      dimensions: [
        {
        name: 'Instance',
        value: 'i-0e7e9ac3b9ba678d2'
      },
    ],
    });

    // Alarm class
    const alarm = new cloudwatch.Alarm(this, 'Alarm', {
      metric: metric,
      threshold: 100,
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      actionsEnabled: true,
      alarmDescription: 'Alarm when CPU Utilization exceeds 100%',
    
      

    });
  }
}
