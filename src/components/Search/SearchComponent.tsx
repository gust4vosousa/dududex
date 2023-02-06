import { SelectComponent } from '../SelectPokemon/SelectPokemonComponent';
import { SearchContainer } from './SearchComponent.styles';
import { ISearchProps } from './SearchComponent.types';

// const ALL_TYPES: EType[] = Object.values(EType);

export const SearchComponent: React.FC<ISearchProps> = ({
  pokemonList,
  label,
  isBusy,
  onChange
}) => {
  // const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  // const [selectedTypes, setSelectedTypes] = useState<EType[]>([]);

  // const filteredList = useMemo(() => {}, []);

  // const onSelectType = useCallback(
  //   (value: EType) => {
  //     if (selectedTypes.includes(value)) {
  //       setSelectedTypes((prev) => prev.filter((type) => type !== value));
  //       return;
  //     }

  //     setSelectedTypes((prev) => [...prev, value]);
  //   },
  //   [selectedTypes]
  // );

  return (
    <SearchContainer>
      <SelectComponent
        options={pokemonList}
        label={label}
        onChange={onChange}
        loading={isBusy}
      />

      {/* <Box>
        <Box>{selectedTypes}</Box>
        <Box>
          <Box>Filter</Box>
          <IconButton onClick={() => setIsFilterVisible(!isFilterVisible)}>
            {isFilterVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
        </Box>
        <FilterContainer>
          {isFilterVisible &&
            ALL_TYPES.map((type) => (
              <>
                <Checkbox onChange={() => onSelectType(type)} />
                <TypeBadgeComponent types={[type]} />
              </>
            ))}
        </FilterContainer>
      </Box> */}
    </SearchContainer>
  );
};
