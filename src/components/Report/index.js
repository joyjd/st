import React, { useEffect, useState } from 'react';
import { getTitleSm, getIcons, getTime } from './../../helpers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Box from '@material-ui/core/Box';
import DetailWrapper from './DetailWrapper';
import { getSessionReport } from './../../firebase/firebaseService';

import Divider from '@material-ui/core/Divider';
const Report = () => {
    const [reportList, setReportList] = useState({});

    const GetSessionReportData = async () => {
        const reportList = await getSessionReport(
            localStorage.getItem('employeeId')
        );
        const reportListObj = {};
        if (reportList.length !== 0) {
            reportList.forEach((data) => {
                if (reportListObj[data.startDate]) {
                    reportListObj[data.startDate] = [
                        ...reportListObj[data.startDate],
                        data,
                    ];
                } else {
                    reportListObj[data.startDate] = [data];
                }
            });
        }

        setReportList(reportListObj);
    };
    useEffect(() => GetSessionReportData(), []);
    return (
        <>
            {Object.keys(reportList).length !== 0 ? (
                <>
                    {Object.keys(reportList)
                        .reverse()
                        .map((data, index) => {
                            return (
                                <Box key={index}>
                                    {getTitleSm(
                                        new Date(Number(data)).toDateString()
                                    )}
                                    <List>
                                        {reportList[data].map((doc, index) => (
                                            <Box key={index}>
                                                <ListItem
                                                    style={{
                                                        paddingLeft: 0,
                                                        paddingRight: 30,
                                                    }}
                                                >
                                                    <ListItemAvatar
                                                        style={{ minWidth: 35 }}
                                                    >
                                                        {getIcons('Session')}
                                                    </ListItemAvatar>
                                                    {doc.sessionName}
                                                    <DetailWrapper
                                                        session={doc}
                                                    />
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))}
                                    </List>
                                </Box>
                            );
                        })}
                </>
            ) : (
                <>You have not hosted any sessions yet.</>
            )}
        </>
    );
};

export default Report;
