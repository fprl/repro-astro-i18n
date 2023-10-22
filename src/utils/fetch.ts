const baseUrl = 'https://system.huishurenibiza.nl';
// const baseUrl = 'https://system.ibizadev.nl';

const apis = {
  base: baseUrl,
  api: `${baseUrl}/api`,
  v2: `${baseUrl}/api/v2`,
  v4: `${baseUrl}/api/v4`,
  cms: 'https://api.coveredibiza.com',
};

export class FetchError extends Error {
  response: Response;

  constructor(message: string, response: Response) {
    super(message);
    this.name = 'FetchError';
    this.response = response;
  }
}

async function Fetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  try {
    const res: Response = init ? await fetch(input, init) : await fetch(input);

    if (!res.ok) {
      throw new FetchError('Bad fetch response', res);
    }

    return res.json() as Promise<T>;
  } catch (error) {
    if (error instanceof FetchError) {
      switch (error.response.status) {
        case 400:
          console.log('400');
          /* Handle */ break;
        case 401:
          console.log('401');
          /* Handle */ break;
        case 404:
          console.log('404');
          /* Handle */ break;
        case 500:
          console.log('500');
          /* Handle */ break;
      }
    } else {
      // throw error; // re-throw the error if it's not an instance of OFetchError
      console.log('unhandled error');
    }

    // throw error;
    return null as unknown as T;
  }
}

export { Fetch, apis };
