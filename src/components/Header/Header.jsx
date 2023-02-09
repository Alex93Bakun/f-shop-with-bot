import React from 'react';

import { useTelegram } from '../hooks/useTelegram';

import Button from '../Button/Button';

import './Header.css';

const Header = () => {
    const { onClose, user } = useTelegram();

    return (
        <header className="header">
            <Button onClick={onClose}>Закрити</Button>
            <span className="username">{user?.username}</span>
        </header>
    );
};

export default Header;
