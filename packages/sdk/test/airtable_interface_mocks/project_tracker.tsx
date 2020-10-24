import {SdkInitData} from '../../src/types/airtable_interface';
import {ViewType} from '../../src/types/view';

const projectTracker: SdkInitData = {
    isDevelopmentMode: false,
    blockInstallationId: 'blicPfOILwejF6HL2',
    isFirstRun: false,
    isFullscreen: false,
    initialKvValuesByKey: {},
    baseData: {
        id: 'app97Vimdj1OP7QKF',
        name: 'Project tracker',
        activeTableId: 'tbly388E8NA1CNhnF',
        tableOrder: ['tbly388E8NA1CNhnF', 'tblcstEo50YXLJcK4', 'tblyt8B45wJQIx1c3'],
        tablesById: {
            tbly388E8NA1CNhnF: {
                id: 'tbly388E8NA1CNhnF',
                name: 'Design projects',
                primaryFieldId: 'fldXaTPfxIVhAUYde',
                fieldsById: {
                    fldXaTPfxIVhAUYde: {
                        id: 'fldXaTPfxIVhAUYde',
                        name: 'Name',
                        type: 'text',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fld3DvZllJtyaNYpm: {
                        id: 'fld3DvZllJtyaNYpm',
                        name: 'Client',
                        type: 'foreignKey',
                        typeOptions: {
                            foreignTableId: 'tblyt8B45wJQIx1c3',
                            relationship: 'many',
                            symmetricColumnId: 'fld3nuJVc9ivC8IJF',
                        },
                        description: 'the project client',
                        lock: null,
                    },
                    fldRljtoVpOt1IDYH: {
                        id: 'fldRljtoVpOt1IDYH',
                        name: 'Category',
                        type: 'select',
                        typeOptions: {
                            choiceOrder: [
                                'seljTTcI4KHd0jrta',
                                'selGAW8wVsYjk1meo',
                                'selPhAdTUB6zGdSwq',
                                'selGKDGqQKrlpNDxu',
                            ],
                            choices: {
                                seljTTcI4KHd0jrta: {
                                    name: 'Brand identity',
                                    id: 'seljTTcI4KHd0jrta',
                                    color: 'cyanDark',
                                },
                                selGAW8wVsYjk1meo: {
                                    name: 'Industrial design',
                                    id: 'selGAW8wVsYjk1meo',
                                    color: 'redDark',
                                },
                                selPhAdTUB6zGdSwq: {
                                    name: 'Healthcare design',
                                    id: 'selPhAdTUB6zGdSwq',
                                    color: 'yellowDark',
                                },
                                selGKDGqQKrlpNDxu: {
                                    name: 'Technology design',
                                    id: 'selGKDGqQKrlpNDxu',
                                    color: 'greenDark',
                                },
                            },
                        },
                        description: '',
                        lock: null,
                    },
                    fldHOlUIpjmlYj549: {
                        id: 'fldHOlUIpjmlYj549',
                        name: 'Complete',
                        type: 'checkbox',
                        typeOptions: {
                            color: 'orange',
                            icon: 'check',
                        },
                        description: '',
                        lock: null,
                    },
                    fld509oRhgt1b3fVa: {
                        id: 'fld509oRhgt1b3fVa',
                        name: 'Tasks',
                        type: 'foreignKey',
                        typeOptions: {
                            foreignTableId: 'tblcstEo50YXLJcK4',
                            relationship: 'many',
                            symmetricColumnId: 'fldxsrKD1DItS6Auv',
                        },
                        description: '',
                        lock: null,
                    },
                    fldOrCZn3PMpCWVnD: {
                        id: 'fldOrCZn3PMpCWVnD',
                        name: 'Project lead',
                        type: 'collaborator',
                        typeOptions: {
                            shouldNotify: true,
                        },
                        description: '',
                        lock: null,
                    },
                    fldaii0rqepLFGGTv: {
                        id: 'fldaii0rqepLFGGTv',
                        name: 'Project team',
                        type: 'multiCollaborator',
                        typeOptions: {
                            shouldNotify: true,
                        },
                        description: '',
                        lock: null,
                    },
                    fld4SUsRIi5x5FlLs: {
                        id: 'fld4SUsRIi5x5FlLs',
                        name: 'Due date',
                        type: 'date',
                        typeOptions: {
                            isDateTime: false,
                            dateFormat: 'Local',
                        },
                        description: '',
                        lock: null,
                    },
                    fldlPkIP0sfBJnS2U: {
                        id: 'fldlPkIP0sfBJnS2U',
                        name: 'Kickoff date',
                        type: 'date',
                        typeOptions: {
                            isDateTime: false,
                            dateFormat: 'Local',
                        },
                        description: '',
                        lock: null,
                    },
                    fldFJ3xHdu3VMMZII: {
                        id: 'fldFJ3xHdu3VMMZII',
                        name: 'Notes',
                        type: 'multilineText',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fldY1QpPpkdkz9KZk: {
                        id: 'fldY1QpPpkdkz9KZk',
                        name: 'Project images',
                        type: 'multipleAttachment',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                },
                activeViewId: 'viwkNnS94RQAQQTMn',
                viewOrder: [
                    'viwkNnS94RQAQQTMn',
                    'viwqo8mFAqy2HYSCL',
                    'viw8v5XkLudbiCJfD',
                    'viwhz3PjFATSxaV5X',
                    'viwA4Tzw8IJcHHgul',
                ],
                viewsById: {
                    viwkNnS94RQAQQTMn: {
                        id: 'viwkNnS94RQAQQTMn',
                        name: 'All projects',
                        type: ViewType.GRID,
                    },
                    viwqo8mFAqy2HYSCL: {
                        id: 'viwqo8mFAqy2HYSCL',
                        name: 'Incomplete projects by leader',
                        type: ViewType.GRID,
                    },
                    viw8v5XkLudbiCJfD: {
                        id: 'viw8v5XkLudbiCJfD',
                        name: 'Completed projects',
                        type: ViewType.GRID,
                    },
                    viwhz3PjFATSxaV5X: {
                        id: 'viwhz3PjFATSxaV5X',
                        name: 'Project calendar',
                        type: ViewType.CALENDAR,
                    },
                    viwA4Tzw8IJcHHgul: {
                        id: 'viwA4Tzw8IJcHHgul',
                        name: 'Due dates only',
                        type: ViewType.CALENDAR,
                    },
                },
                description: '',
                lock: null,
                externalSyncById: null,
            },
            tblcstEo50YXLJcK4: {
                id: 'tblcstEo50YXLJcK4',
                name: 'Tasks',
                primaryFieldId: 'fldfu76MKFFh6x6IM',
                fieldsById: {
                    fldfu76MKFFh6x6IM: {
                        id: 'fldfu76MKFFh6x6IM',
                        name: 'Name',
                        type: 'text',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fldij9kocxowfur16: {
                        id: 'fldij9kocxowfur16',
                        name: 'Notes',
                        type: 'multilineText',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fldxsrKD1DItS6Auv: {
                        id: 'fldxsrKD1DItS6Auv',
                        name: 'Design project',
                        type: 'foreignKey',
                        typeOptions: {
                            foreignTableId: 'tbly388E8NA1CNhnF',
                            symmetricColumnId: 'fld509oRhgt1b3fVa',
                            relationship: 'many',
                        },
                        description: '',
                        lock: null,
                    },
                    fldSCh5AV7Z3056Vw: {
                        id: 'fldSCh5AV7Z3056Vw',
                        name: 'Time estimate (days)',
                        type: 'number',
                        typeOptions: {
                            format: 'decimal',
                            precision: 1,
                            negative: false,
                            validatorName: 'positive',
                        },
                        description: '',
                        lock: null,
                    },
                    fldX2QXZGxsqj7YC0: {
                        id: 'fldX2QXZGxsqj7YC0',
                        name: 'Completed',
                        type: 'checkbox',
                        typeOptions: {
                            color: 'gray',
                            icon: 'check',
                        },
                        description: '',
                        lock: null,
                    },
                    fldfxDIwSfAEb1wLI: {
                        id: 'fldfxDIwSfAEb1wLI',
                        name: 'Assignee',
                        type: 'collaborator',
                        typeOptions: {
                            shouldNotify: true,
                        },
                        description: '',
                        lock: null,
                    },
                },
                activeViewId: null,
                viewOrder: ['viwWxkRmrDMhu7I8p'],
                viewsById: {
                    viwWxkRmrDMhu7I8p: {
                        id: 'viwWxkRmrDMhu7I8p',
                        name: 'All tasks',
                        type: ViewType.GRID,
                    },
                },
                description: '',
                lock: null,
                externalSyncById: null,
            },
            tblyt8B45wJQIx1c3: {
                id: 'tblyt8B45wJQIx1c3',
                name: 'Clients',
                primaryFieldId: 'fldKd5ShNX97LVIMn',
                fieldsById: {
                    fldKd5ShNX97LVIMn: {
                        id: 'fldKd5ShNX97LVIMn',
                        name: 'Name',
                        type: 'text',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fldzln1WXZvQ02aHK: {
                        id: 'fldzln1WXZvQ02aHK',
                        name: 'About',
                        type: 'multilineText',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fldZV9DBddvUkt1DV: {
                        id: 'fldZV9DBddvUkt1DV',
                        name: 'Logo',
                        type: 'multipleAttachment',
                        typeOptions: null,
                        description: '',
                        lock: null,
                    },
                    fld3nuJVc9ivC8IJF: {
                        id: 'fld3nuJVc9ivC8IJF',
                        name: 'Projects',
                        type: 'foreignKey',
                        typeOptions: {
                            foreignTableId: 'tbly388E8NA1CNhnF',
                            symmetricColumnId: 'fld3DvZllJtyaNYpm',
                            relationship: 'many',
                        },
                        description: '',
                        lock: null,
                    },
                },
                activeViewId: null,
                viewOrder: ['viwtbJNofZMnUD8sQ'],
                viewsById: {
                    viwtbJNofZMnUD8sQ: {
                        id: 'viwtbJNofZMnUD8sQ',
                        name: 'All clients',
                        type: ViewType.GRID,
                    },
                },
                description: '',
                lock: null,
                externalSyncById: null,
            },
        },
        permissionLevel: 'create',
        currentUserId: 'usrcNLql3ByVkIjIe',
        enabledFeatureNames: [],
        collaboratorsById: {
            usr3VLCpyqgcI46Sh: {
                id: 'usr3VLCpyqgcI46Sh',
                email: 'collab10@example.com',
                name: 'Gal Samari',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/qy4E6kRaaku2JJwXpjQb_headshot-purple-2.png',
            },
            usr6hWARwVNgmt3WW: {
                id: 'usr6hWARwVNgmt3WW',
                email: 'collab35@example.com',
                name: 'Sam Epps',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/ybh33aqqTrKhPFYFj47K_headshot-orange-2.png',
            },
            usr8e9aJ8jHSg29YV: {
                id: 'usr8e9aJ8jHSg29YV',
                email: 'collab26@example.com',
                name: 'Paris Fotiou',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/xoafD4NRXGRLcx3qilRg_Screen%20Shot%202019-01-17%20at%201.20.14%20PM.png',
            },
            usrArxKAc5yNZQfxl: {
                id: 'usrArxKAc5yNZQfxl',
                email: 'collab5@example.com',
                name: 'Bailey Mirza',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/7pprdNqqQuSWWN7zeavM_headshot-pink-1.png',
            },
            usrQjmKTBNxfXNmmR: {
                id: 'usrQjmKTBNxfXNmmR',
                email: 'collab16@example.com',
                name: 'Jordan Peretz',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/jCMoXFziQcD0XkHMxhwQ_Screen%20Shot%202019-01-17%20at%201.19.59%20PM.png',
            },
            usrSdmrY5yGdbcZzg: {
                id: 'usrSdmrY5yGdbcZzg',
                email: 'collab23@example.com',
                name: 'Leslie Walker',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/zMyV7nBhTI0fwMiWOi6g_headshot-blue-1.png',
            },
            usrTv3tPZmP3GYJ9K: {
                id: 'usrTv3tPZmP3GYJ9K',
                email: 'collab4@example.com',
                name: 'Ash Quintana',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/7KX9bnbqQyGvWGArbTXB_headshot-yellow-1.png',
            },
            usrpEyZytbTJ95a2L: {
                id: 'usrpEyZytbTJ95a2L',
                email: 'collab37@example.com',
                name: 'Skyler Xu',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/WB8Q1EQRTJW3YBfv403V_headshot-orange-1.png',
            },
            usru7j5m2lcNhriKv: {
                id: 'usru7j5m2lcNhriKv',
                email: 'collab7@example.com',
                name: 'Cameron Toth',
                profilePicUrl:
                    'https://dl.airtable.com/profilePics/1Paw52jFSLa7vRHwxCRd_headshot-pink-2.png',
            },
        },
        activeCollaboratorIds: ['usrEcGMEnwYKUYIJQ', 'usrcNLql3ByVkIjIe'],
        cursorData: null,
        billingPlanGrouping: 'pro',
        appInterface: {},
        isBlockDevelopmentRestrictionEnabled: false,
    },
    intentData: null,
};

export default projectTracker;
