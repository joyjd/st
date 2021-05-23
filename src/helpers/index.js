import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ComputerIcon from '@material-ui/icons/Computer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

export const getIcons = (iconName, props) => {
    const components = {
        MenuIcon: MenuIcon,
        ComputerIcon: ComputerIcon,
        DashboardIcon: DashboardIcon,
        AssignmentIcon: AssignmentIcon,
        DateRangeIcon: DateRangeIcon,
        AccessAlarmIcon: AccessAlarmIcon,
        Dot: FiberManualRecordIcon,
        RemoveUser: PersonAddDisabledIcon,
    };
    const Icon = components[iconName];
    return <Icon {...props} />;
};

export const getTitle = (titleName) => {
    return (
        <div className="textBg">
            <div>{titleName}</div>
        </div>
    );
};

export const getTime = (timeString) => {
    return new Date('1970-01-01T' + timeString + 'Z').toLocaleTimeString(
        {},
        { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
    );
};
