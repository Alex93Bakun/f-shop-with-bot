import React, { useEffect, useState } from 'react';

import { useTelegram } from '../hooks/useTelegram';

import './Form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Надіслати дані',
        });
    }, []);

    useEffect(() => {
        if (!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeCity = (e) => {
        setCity(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div className="form">
            <h3>Введіть ваші дані</h3>
            <input
                className="input"
                type="text"
                placeholder="Країна"
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className="input"
                type="text"
                placeholder="Місто"
                value={city}
                onChange={onChangeCity}
            />
            <select className="select" value={subject} onChange={onChangeSubject}>
                <option value="physical">Фіз. особа</option>
                <option value="legal">Юр. особа</option>
            </select>
        </div>
    );
};

export default Form;
