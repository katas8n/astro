import React, { PureComponent } from 'react';

import './Header.scss';

class Header extends PureComponent {
    state = {
        time: new Date().toUTCString()
    };
    componentDidMount() {
        this.time = setInterval(() => {
            this.setState({
                time: new Date().toUTCString()
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.time);
        this.time = null;
    }

    render() {
        const time = this.state.time;
        const { latitude, longitude } = this.props;
        return (
            <header className="header-map">
                <div className="header-map--info">
                    latitude :{' '}
                    <span className="header-map__latitude">{latitude}</span>{' '}
                    longitude:{' '}
                    <span className="header-map__longitude">{longitude}</span>
                </div>
                <div className="header-map--time">
                    Current UTC-time : {time}
                </div>
            </header>
        );
    }
}

export default Header;
