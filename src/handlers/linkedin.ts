import 'dotenv/config';
import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import { LinkedInProfileScraper } from '../index';

export const crawlProfile = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

    const scraper = new LinkedInProfileScraper({
        sessionCookieValue: `${process.env.LINKEDIN_SESSION_COOKIE_VALUE}`,
        keepAlive: false
    });

    await scraper.setup();

    const result = await scraper.run('https://www.linkedin.com/in/jvandenaardweg/');

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-*': true,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};