import React from 'react';
import './CalendarGrid.css'
import moment from "moment";
import AddTask from "../AddTask";

const CalendarGrid = ({startDay, onClickBack}) => {
    const day = startDay.clone()
    let daysArray = []
    for (let i = 0; i < 42 ; i++) {
        daysArray[i] = day.add('1', 'day').clone()
    }
    const daysOfWeek = [
        {
            name: 'Monday'
        },
        {
            name: 'Tuesday'
        },
        {
            name: 'Wednesday'
        },
        {
            name: 'Thursday'
        },
        {
            name: 'Friday'
        },
        {
            name: 'Saturday '
        },
        {
            name: 'Sunday '
        },

    ]
    for (let i = 0; i < daysOfWeek.length ; i++) {
        daysOfWeek[i].id = i
    }
    let valueOfCurrentMouth =  +startDay.format('MM')
    let valueOfCurrentYear = startDay.format('yyyy')
    const onClickDate = (date) => {
        console.log(date)
    }

    return (
        <div>
            <div className="controls">
                <div onClick={() => onClickBack('back')} className="back">
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98212 9.9004C5.078 9.98999 5.18002 10.0567 5.28817 10.1005C5.39627 10.141 5.51541 10.1603 5.64561 10.1581C5.82462 10.1552 5.98666 10.1102 6.13174 10.0232C6.27351 9.93298 6.38717 9.81554 6.4727 9.67089C6.55818 9.52299 6.59951 9.36278 6.59669 9.19028C6.59227 8.92014 6.4826 8.68427 6.26768 8.48268L3.00927 5.43014L3.0147 5.76213L6.17161 2.61433C6.37992 2.41232 6.48186 2.17625 6.47744 1.9061C6.47456 1.73034 6.42801 1.57158 6.33779 1.42981C6.24751 1.28478 6.13008 1.17113 5.98548 1.08885C5.83758 1.00337 5.67412 0.962093 5.49511 0.965024C5.23473 0.969286 5.01652 1.06402 4.84049 1.24921L1.29989 4.82327C1.17503 4.95229 1.08437 5.08237 1.02792 5.21352C0.971411 5.34141 0.942782 5.48187 0.942031 5.6349C0.94688 5.93109 1.07498 6.19921 1.32634 6.43927L4.98212 9.9004Z" fill="black" fillOpacity="0.25"/>
                    </svg>
                </div>
                <div onClick={() => onClickBack('forward')} className="forward">
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.76088 1.28699C1.66517 1.19722 1.56328 1.13033 1.45521 1.08632C1.34718 1.04557 1.22807 1.02613 1.09788 1.02802C0.918859 1.03062 0.75673 1.07529 0.611488 1.16204C0.469549 1.252 0.355677 1.36922 0.269873 1.51371C0.184116 1.66146 0.142488 1.82158 0.14499 1.99409C0.148908 2.26424 0.258138 2.50031 0.472678 2.7023L3.72538 5.76092L3.72057 5.42893L0.557794 8.57083C0.349108 8.77244 0.246723 9.00833 0.250642 9.27848C0.253191 9.45424 0.299445 9.61309 0.389403 9.75503C0.479409 9.90023 0.596633 10.0141 0.741074 10.0966C0.888818 10.1824 1.0522 10.224 1.23122 10.2214C1.49161 10.2176 1.70999 10.1233 1.88636 9.93842L5.43363 6.37098C5.55873 6.2422 5.64963 6.11228 5.70633 5.98124C5.76307 5.85345 5.79197 5.71304 5.793 5.56002C5.78871 5.26382 5.6611 4.99546 5.41019 4.75494L1.76088 1.28699Z" fill="black" fillOpacity="0.25"/>
                    </svg>
                </div>
            </div>
            <div className={'nameAndYearOfCurrentMouth'} >
                <span> {valueOfCurrentMouth} </span>
                <span> {valueOfCurrentYear} </span>
            </div>
            <div className="daysOfWeek">
                {daysOfWeek.map((el) =>
                <div key={el.id} className={'dayOfWeek'}>
                    {el.name}
                </div>
                )}
            </div>
            <AddTask/>
            <div className={'calendarWrapper'}>
                {daysArray.map((el) =>
                    <div
                        onClick={() => onClickDate(el) }
                        key={el}
                        className={'cellWrapper'}
                        style={[6,7].includes(el.isoWeekday()) ? {background: '#ececec'} : {background: ''}}>
                        <div  className="day"
                             style={(moment().isAfter(el) ? {color : '#b8b8b8'} : {})}>
                            {el.format('D')}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarGrid;
