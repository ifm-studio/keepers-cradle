import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Handler,
} from 'aws-lambda';

import { Turn } from './Turn';

export type ProxyHandler = Handler<
APIGatewayProxyEventV2,
APIGatewayProxyResultV2
>;

export const handler: ProxyHandler = async (event, context) => {
  console.log('request:', JSON.stringify(event, undefined, 2));
  console.log('context:', JSON.stringify(context, undefined, 2));
  if (event.queryStringParameters === null) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        message: 'notation and luck required',
      }),
    };
  }

  const notation = event.queryStringParameters?.notation ?? 'd6';
  const luck = Number(event.queryStringParameters?.luck) ?? 0;
  const turn = new Turn(notation, luck);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    body: JSON.stringify({
      message: 'Success',
      data: {
        total: turn.roll(),
        luck: turn.luck.value,
        min: turn.minPotential(),
        max: turn.maxPotential(),
        bonus: turn.extraBonus,
      },
    }),
  };
};

export default handler;
