let dates = [{
    month: 'AUG',
    dayDate: 19,
    dayName: 'MOM',
    id: 1,
    hours: [{
        dateIdentifier: 1,
        hour: "8:00",
        avaliable: true
    },
    {
        dateIdentifier: 1,
        hour: "8:30",
        avaliable: true
    }, {
        dateIdentifier: 1,
        hour: "9:00",
        avaliable: true
    }, {
        dateIdentifier: 1,
        hour: "9:30",
        avaliable: true
    },
    {
        dateIdentifier: 1,
        hour: "10:00",
        avaliable: true
    }
    ]
}, {
    month: 'AUG',
    dayDate: 20,
    dayName: 'TUE',
    id: 2,
    hours: [{
        dateIdentifier: 2,

        hour: "8:00",
        avaliable: true
    },
    {
        dateIdentifier: 2,
        hour: "8:30",
        avaliable: true
    }, {
        dateIdentifier: 2,
        hour: "9:00",
        avaliable: true
    }, {
        dateIdentifier: 2,
        hour: "9:30",
        avaliable: true
    },
    {
        dateIdentifier: 2,

        hour: "10:00",
        avaliable: true
    }
    ]
}, {
    month: 'AUG',
    dayDate: 21,
    dayName: 'WED',
    id: 3,
    hours: [{
        dateIdentifier: 3,
        hour: "8:00",
        avaliable: true
    },
    {
        dateIdentifier: 3,
        hour: "8:30",
        avaliable: true
    }, {
        dateIdentifier: 3,
        hour: "9:00",
        avaliable: true
    }, {
        dateIdentifier: 3,
        hour: "9:30",
        avaliable: true
    },
    {
        dateIdentifier: 3,
        hour: "10:00",
        avaliable: true
    }
    ]
}, {
    month: 'AUG',
    dayDate: 22,
    dayName: 'THU',
    id: 4,
    hours: [{
        dateIdentifier: 4,

        hour: "8:00",
        avaliable: true
    },
    {
        dateIdentifier: 4,

        hour: "8:30",
        avaliable: true
    }, {
        dateIdentifier: 4,

        hour: "9:00",
        avaliable: true
    }, {
        dateIdentifier: 4,

        hour: "9:30",
        avaliable: true
    },
    {
        dateIdentifier: 4,

        hour: "10:00",
        avaliable: true
    }
    ]
}]

function resetDate() {
    return [{
        month: 'AUG',
        dayDate: 19,
        dayName: 'MOM',
        id: 1,
        hours: [{
            dateIdentifier: 1,
            hour: "8:00",
            avaliable: true
        },
        {
            dateIdentifier: 1,
            hour: "8:30",
            avaliable: true
        }, {
            dateIdentifier: 1,
            hour: "9:00",
            avaliable: true
        }, {
            dateIdentifier: 1,
            hour: "9:30",
            avaliable: true
        },
        {
            dateIdentifier: 1,
            hour: "10:00",
            avaliable: true
        }
        ]
    }, {
        month: 'AUG',
        dayDate: 20,
        dayName: 'TUE',
        id: 2,
        hours: [{
            dateIdentifier: 2,
    
            hour: "8:00",
            avaliable: true
        },
        {
            dateIdentifier: 2,
            hour: "8:30",
            avaliable: true
        }, {
            dateIdentifier: 2,
            hour: "9:00",
            avaliable: true
        }, {
            dateIdentifier: 2,
            hour: "9:30",
            avaliable: true
        },
        {
            dateIdentifier: 2,
    
            hour: "10:00",
            avaliable: true
        }
        ]
    }, {
        month: 'AUG',
        dayDate: 21,
        dayName: 'WED',
        id: 3,
        hours: [{
            dateIdentifier: 3,
            hour: "8:00",
            avaliable: true
        },
        {
            dateIdentifier: 3,
            hour: "8:30",
            avaliable: true
        }, {
            dateIdentifier: 3,
            hour: "9:00",
            avaliable: true
        }, {
            dateIdentifier: 3,
            hour: "9:30",
            avaliable: true
        },
        {
            dateIdentifier: 3,
            hour: "10:00",
            avaliable: true
        }
        ]
    }, {
        month: 'AUG',
        dayDate: 22,
        dayName: 'THU',
        id: 4,
        hours: [{
            dateIdentifier: 4,
    
            hour: "8:00",
            avaliable: true
        },
        {
            dateIdentifier: 4,
    
            hour: "8:30",
            avaliable: true
        }, {
            dateIdentifier: 4,
    
            hour: "9:00",
            avaliable: true
        }, {
            dateIdentifier: 4,
    
            hour: "9:30",
            avaliable: true
        },
        {
            dateIdentifier: 4,
    
            hour: "10:00",
            avaliable: true
        }
        ]
    }]
    ;
}

module.exports = { dates, resetDate};