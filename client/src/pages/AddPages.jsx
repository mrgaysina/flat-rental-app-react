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
} from '@mui/material';
import Box from '@mui/material/Box';

const AddPages = () => {
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
        >
          <MenuItem value="Город">Город</MenuItem>
          <MenuItem value="Море">Море</MenuItem>
          <MenuItem value="Горы">Горы</MenuItem>
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
        >
          <MenuItem value="Квартира">Квартира</MenuItem>
          <MenuItem value="Комната">Комната</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Страна"
        />
      </Box>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Город"
        />
      </Box>
      <Box>
        <TextField
          style={{ width: '400px', marginTop: '10px' }}
          size="small"
          label="Адрес"
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
        />
        <FormControlLabel
          control={<Switch default />}
          label="Кондиционер"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Обогреватель"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Wi-fi"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Телевизор"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Фен"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Стиральная машина"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Холодильник"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch default />}
          label="Плита"
          labelPlacement="start"
        />
      </Box>
      <FormControl
        size="small"
        style={{ width: '400px', marginTop: '10px' }}
      >
        <InputLabel id="demo-simple-select-label">Парковка</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Количество гостей"
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
        >
          <MenuItem value={true}>Да</MenuItem>
          <MenuItem value={false}>Нет</MenuItem>
        </Select>
      </FormControl>
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Главное фото"
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 1"
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 2"
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 3"
      />
      <TextField
        style={{ width: '400px', marginTop: '10px' }}
        size="small"
        label="Доп. фото 3"
      />
    </Box>
  );
};

export default AddPages;
