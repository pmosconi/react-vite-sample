#!/bin/bash

# aws cli profile
PROFILE=AWS-PROFILE
REGION=eu-west-1

# temp upload bucket
BUCKET=BUCKET-NAME

NAME=test-api

rm -rf deploy
mkdir deploy
cp app.cjs ./deploy
cp lambda.cjs ./deploy
cp package*json ./deploy
# cp -r ./lib ./deploy
cd ./deploy
npm ci --omit=dev
rm -rf ./node_modules/@aws-sdk
cd ..

aws cloudformation package \
  --template ./cloudformation.yaml \
  --s3-bucket $BUCKET \
  --output-template packaged-sam.yaml \
  --region $REGION \
  --profile $PROFILE

aws cloudformation deploy \
  --template-file packaged-sam.yaml \
  --stack-name $NAME \
  --capabilities CAPABILITY_IAM \
  --region $REGION \
  --profile $PROFILE

read -p "Press enter to continue"

# aws lambda update-function-code --function-name $NAME --region $REGION --zip-file fileb://$NAME.zip --profile $PROFILE