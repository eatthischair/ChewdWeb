'use server';

export const fetchData = async (value: string) => {
  try {
    const options: any = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-Goog-Api-Key': process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify({
        input: value,
        locationBias: {
          circle: {
            center: { latitude: 32.7766642, longitude: -96.7969879 },
            radius: 500.0,
          },
        },
      }),
    };

    const response = await fetch(
      'https://places.googleapis.com/v1/places:autocomplete',
      options
    );

    if (!response.ok) {
      console.error(
        `❌ Fetch failed: ${response.status} ${response.statusText} `
      );
      return null;
    }

    const body = await response.json();
    return { status: response.status, body };
  } catch (error) {
    console.log(`❌ Fetch error for:`, error);
    return null;
  }
};
