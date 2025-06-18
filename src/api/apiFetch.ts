export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: { name: string };
  episode: string[];
}

interface IApiResponse {
  info: { pages: number; next: string | null; prev: string | null };
  results: ICharacter[];
}

const API = 'https://rickandmortyapi.com/api/character';

export const fetchData = async (page: number = 1, name: string = ''): Promise<IApiResponse> => {
  try {
    const params = new URLSearchParams({ page: page.toString(), name });
    const response = await fetch(`${API}?${params}`);
    return await response.json();
  } catch (error) {
    return { info: { pages: 1, next: null, prev: null }, results: [] };
  }
};

export const fetchCharacter = async (id: string): Promise<ICharacter | null> => {
  try {
    const response = await fetch(`${API}/${id}`);
    return await response.json();
  } catch (error) {
    return null;
  }
};