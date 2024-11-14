import axios from "axios";

export const GET = async (request, { params }) => {
  try {
    const res = await axios(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${params.keyword}`
    );
    const data = res.data;
    // console.log("Pokemon: ", data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // console.log("Failed fetching Pokemon: ", error);
    return new Response("Failed fetching Pokemon", { status: 500 });
  }
};
