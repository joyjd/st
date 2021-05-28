import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ComputerIcon from '@material-ui/icons/Computer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import DevicesIcon from '@material-ui/icons/Devices';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExtensionIcon from '@material-ui/icons/Extension';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import LiveTvIcon from '@material-ui/icons/LiveTv';

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
        Details: FindInPageIcon,
        Session: DevicesIcon,
        User: AccountCircleIcon,
        Logout: ExitToAppIcon,
        Quiz: ExtensionIcon,
        Question: ContactSupportIcon,
        AnswerOption: CheckBoxOutlineBlankIcon,
        RightAnswer: CheckBoxIcon,
        Host: LiveTvIcon,
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
export const getTitleSm = (titleName) => {
    return (
        <div className="textSm">
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
