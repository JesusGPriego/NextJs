import { NextPage, GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/layouts/Layout';
import { pokeApi } from './api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonGrid } from '@/components/pokemon';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokémon List'>
      <PokemonGrid pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      ...pokemon,
      id,
      img,
    };
  });
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
