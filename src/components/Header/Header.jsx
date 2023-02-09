import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../hooks/useTelegram';

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
