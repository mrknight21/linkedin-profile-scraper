import 'dotenv/config';
import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';


export const getTalentById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-*': true,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify("hello world!!"),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    };
  }
};