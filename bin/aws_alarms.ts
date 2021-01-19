#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsAlarmsStack } from '../lib/aws_alarms-stack';

const app = new cdk.App();
new AwsAlarmsStack(app, 'AwsAlarmsStack');
