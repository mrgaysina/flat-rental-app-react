import React, { useState, useEffect } from 'react';
import styles from './MyModalLog.module.css';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../RTKSlice/rtkslice";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyModalLog = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((store) => store.toolkit.user)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:3001/auth/login",
      { email, password },
      { withCredentials: true }
    );
    console.log('result data from login', result.data);

    if (result.data.accesstoken) {
      dispatch(getUser({
        id:result.data.id,
        email: result.data.email,
        accesstoken: result.data.accesstoken,
      }))
      setVisible(false)
      navigate("/");
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    console.log('user from login useEffect', user);
  }, [user]);

  const handleChange = (e) => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  const handleX = () => {
    setVisible(false);
  };

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CloseIcon
            className={styles.x}
            onClick={handleX}
            style={{
              display: 'flex',
              position: 'absolute',
              top: '215px',
              left: '680px',
            }}
          />
          <Typography
            variant="subtitle1"
            style={{
              margin: '20px 0px 5px 0px',
            }}
          >
            <b>Войдите</b>
          </Typography>
          <hr
            style={{
              margin: '10px 0 10px 0',
              width: '100%',
              height: '0.5px',
              color: 'lightgray',
              backgroundColor: 'lightgray',
              border: 'none',
            }}
          />
          <Typography
            variant="body2"
            style={{
              fontSize: '22px',
              marginLeft: '25px',
              display: 'flex',
              alignItems: 'start',
              margin: '20px 0px 15px 27px',
            }}
          >
            Добро пожаловать в Nolimit.
          </Typography>
          <TextField
            style={{
              width: '510px',
              margin: '0 25px 15px 25px',
            }}
            id="outlined-email-input"
            label="Email"
            type="email"
            name='email'
            onChange={handleChange}
          />
          <TextField
            style={{
              width: '510px',
              margin: '0 25px 15px 25px',
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            name='password'
            onChange={handleChange}
          />
          <Typography
            variant="body2"
            style={{
              color: '#918b8b',
              fontSize: '12px',
              display: 'flex',
              textAlign: 'left',
              margin: '0 25px 15px 25px',
              width: '510px',
            }}
          >
            Настоящая Политика конфиденциальности персональных данных (далее –
            Политика конфиденциальности) действует в отношении всей информации,
            которую пользователь передает компании ООО «Nolimit.».
          </Typography>
          <button onClick={handleSubmit} className={styles.btn__reg__form}>
            <Typography
              variant="subtitle1"
              style={{
                color: 'white',
              }}
            >
              <b>Продолжить</b>
            </Typography>
          </button>
          <Box
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <hr
              style={{
                margin: '10px 0 10px 0',
                width: '43%',
                height: '0.5px',
                color: 'lightgray',
                backgroundColor: 'lightgray',
                border: 'none',
              }}
            />
            <Typography
              variant="body2"
              style={{
                display: 'flex',
                flexDirection: 'row',
                color: '#918b8b',
                fontSize: '12px',
                padding: '0 10px 0 10px',
              }}
            >
              или войти
            </Typography>
            <hr
              style={{
                margin: '10px 0 10px 0',
                width: '43%',
                height: '0.5px',
                color: 'lightgray',
                backgroundColor: 'lightgray',
                border: 'none',
              }}
            />
          </Box>
          <button className={styles.btn__google__form}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
              style={{
                width: '26px',
                height: '26px',
              }}
            />
            <Typography
              variant="subtitle2"
              style={{ paddingLeft: '5px' }}
            >
              С помощью Facebook
            </Typography>
          </button>
          <button className={styles.btn__facebook__form}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt=""
              style={{
                width: '22px',
                height: '22px',
              }}
            />
            <Typography
              variant="subtitle2"
              style={{ paddingLeft: '9px' }}
            >
              С помощью Google
            </Typography>
          </button>
        </Box>
      </div>
    </div>
  );
};

export default MyModalLog;
