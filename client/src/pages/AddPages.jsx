import React from 'react';
import './AddPages.css';
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Switch,
  Button,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddPages = () => {

  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [bed, setBed] = useState(0)
  const [guests, setGuests] = useState(0)
  const [bathroom, setBathroom] = useState(0)
  const [parking, setParking] = useState('')
  const [pets, setPets] = useState('')
  const [smoking, setSmoking] = useState(false)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [costPerNight, setCostPerNight] = useState('')
  const [description, setDescription] = useState('')
  const [kitchen, setKitchen] = useState(false)
  const [airCondition, setAirCondition] = useState(false)
  const [heating, setHeating] = useState(false)
  const [wifi, setWifi] = useState(false)
  const [TV, setTV] = useState(false)
  const [hairdryer, setHairdryer] = useState(false)
  const [washingMachine, setWashingMachine] = useState(false)
  const [refrigerator, setRefrigerator] = useState(false)
  const [stove, setStove] = useState(false)
  const [photos, setPhotos] = useState([])

  const navigate = useNavigate()

  const handleCategory = (event) => {
    setCategory(event.target.value)
  }

  const handleCity = (event) => {
    setCity(event.target.value)
  }

  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  const handleAddress = (event) => {
    setAddress(event.target.value)
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleCost = (event) => {
    setCostPerNight(event.target.value)
  }

  const handleType = (event) => {
    setType(event.target.value)
  }

  const handleBed = (event) => {
    setBed(event.target.value)
  }

  const handleGuests = (event) => {
    setGuests(event.target.value)
    console.log('event.target.value guests', event.target.value);
  }

  const handleParking = (event) => {
    setParking(event.target.value)
  }

  const handlePets = (event) => {
    setPets(event.target.value)
  }

  const handleSmoking = (event) => {
    setSmoking(event.target.value)
  }

  const handleKitchen = () => {
    const yesno = !kitchen;
    setKitchen(yesno)
  }

  const handleCondition = () => {
    const yesno = !airCondition;
    setAirCondition(yesno)
  }

  const handleHeating = () => {
    const yesno = !heating;
    setHeating(yesno)
  }

  const handleWifi = () => {
    const yesno = !wifi;
    setWifi(yesno)
  }

  const handleTV = () => {
    const yesno = !TV;
    setTV(yesno)
  }

  const handleHairdryer = () => {
    const yesno = !hairdryer;
    setHairdryer(yesno)
  }

  const handleWashingMachine = () => {
    const yesno = !washingMachine;
    setWashingMachine(yesno)
  }

  const handleRefregirator = () => {
    const yesno = !refrigerator;
    setRefrigerator(yesno)
  }

  const handleStove = () => {
    const yesno = !stove;
    setStove(yesno)
  }

  const handlePhoto = (event) => {
    setPhotos([...photos, event.target.value])
  }

  const handleBathroom = (event) => {
    setBathroom(event.target.value)
  }

  const createAdd = () => {
    console.log('aaaaaaaaaaaaaaaaa');
    axios.post('http://localhost:3001/addFlat', {category, bed, bathroom, type, guests, parking, pets, smoking, country, city, address, costPerNight, description, kitchen, airCondition, wifi, TV, heating, hairdryer, washingMachine, refrigerator, stove, photos}, {withCredentials: true})
    .then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        navigate(`/flat/${res.data.newId}`)
      }
    })
  }

  

  return (
    <Box
      style={{
        margin: '20px 0 20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <FormControl
        size="small"
        style={{ width: '400px' }}
      >
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Категория"
          onChange={handleCategory}
        >
          <MenuItem value={"Город"}>Город</MenuItem>
          <MenuItem value={"Море"}>Море</MenuItem>
          <MenuItem value={"Горы"}>Горы</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Тип"
          onChange={handleType}
        >
          <MenuItem value={"Квартира"}>Квартира</MenuItem>
          <MenuItem value={"Комната"}>Комната</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Страна"
          onChange={handleCountry}
        />
      </Box>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Город"
          onChange={handleCity}
        />
      </Box>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Адрес"
          onChange={handleAddress}
        />
      </Box>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">
          Количество спальных мест
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Количество спальных мест"
          onChange={handleBed}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">Количество гостей</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Количество гостей"
          onChange={handleGuests}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Стоимость за ночь"
          onChange={handleCost}
        />
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          multiline
          maxRows={4}
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Описание"
          onChange={handleDescription}
        />
      </Box>
      <Box
        className="itembox"
        style={{ marginTop: '10px' }}
      >
        <FormControlLabel
          control={<Switch default />}
          label="Кухня"
          labelPlacement="start"
          onChange={handleKitchen}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Кондиционер"
          labelPlacement="start"
          onChange={handleCondition}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Обогреватель"
          labelPlacement="start"
          onChange={handleHeating}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Wi-fi"
          labelPlacement="start"
          onChange={handleWifi}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Телевизор"
          labelPlacement="start"
          onChange={handleTV}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Фен"
          labelPlacement="start"
          onChange={handleHairdryer}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Стиральная машина"
          labelPlacement="start"
          onChange={handleWashingMachine}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Холодильник"
          labelPlacement="start"
          onChange={handleRefregirator}
        />
        <FormControlLabel
          control={<Switch default />}
          label="Плита"
          labelPlacement="start"
          onChange={handleStove}
        />
      </Box>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">Ванная комната</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Ванная комната"
          onChange={handleBathroom}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">Парковка</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Парковка"
          onChange={handleParking}
        >
          <MenuItem value="Нет">Нет</MenuItem>
          <MenuItem value="Бесплатно">Бесплатно</MenuItem>
          <MenuItem value="Платно">Платно</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">
          Пребывание с питомцами
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Пребывание с питомцами"
          onChange={handlePets}
        >
          <MenuItem value={true}>Да</MenuItem>
          <MenuItem value={false}>Нет</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">
          Курение в помещении
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Курение в помещении"
          onChange={handleSmoking}
        >
          <MenuItem value={true}>Да</MenuItem>
          <MenuItem value={false}>Нет</MenuItem>
        </Select>
      </FormControl>
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Главное фото"
        onChange={handlePhoto}
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 1"
        onChange={handlePhoto}
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 2"
        onChange={handlePhoto}
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 3"
        onChange={handlePhoto}
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 4"
        onChange={handlePhoto}
      />
      <Button
        sx={{ width: '300px', height: '40px', marginTop: '10px' }}
        variant="contained"
        onClick={createAdd}
      >
        Создать
      </Button>
    </Box>
  );
};

export default AddPages;
