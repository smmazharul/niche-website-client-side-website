import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import AvailableService from '../AvailableService/AvailableService';

const Service = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <ServiceHeader date={date} setDate={setDate}></ServiceHeader>
            <AvailableService date={date}></AvailableService>
        </div>
    );
};

export default Service;