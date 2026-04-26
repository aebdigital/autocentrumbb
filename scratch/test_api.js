require('dotenv').config({ path: '.env.local' });

async function testGoogleApi() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  console.log('Testing with:');
  console.log('Place ID:', placeId);
  console.log('API Key:', apiKey ? '***' + apiKey.slice(-5) : 'MISSING');

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=sk`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Response Status:', data.status);
    if (data.error_message) {
      console.log('Error Message:', data.error_message);
    }
    console.log('Data Result:', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

testGoogleApi();
