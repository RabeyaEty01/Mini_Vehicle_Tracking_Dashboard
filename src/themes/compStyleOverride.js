export default function componentStyleOverrides(theme, borderRadius, outlinedFilled) {
    const mode = theme.palette.mode;
    const bgColor = mode === 'dark' ? theme.palette.dark[800] : theme.palette.grey[50];
    const menuSelectedBack = mode === 'dark' ? theme.palette.secondary.main + 15 : theme.palette.secondary.light;
    const menuSelected = mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark;

    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: `${borderRadius}px`
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.dark,
                    padding: '24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    alignItems: 'center'
                },
                outlined: {
                    border: '1px dashed'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: menuSelected,
                        backgroundColor: menuSelectedBack,
                        '&:hover': {
                            backgroundColor: menuSelectedBack
                        },
                        '& .MuiListItemIcon-root': {
                            color: menuSelected
                        }
                    },
                    '&:hover': {
                        backgroundColor: menuSelectedBack,
                        color: menuSelected,
                        '& .MuiListItemIcon-root': {
                            color: menuSelected
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.palette.text.dark
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.palette.text.dark,
                    '&::placeholder': {
                        color: theme.palette.text.secondary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: outlinedFilled ? bgColor : 'transparent',
                    borderRadius: `${borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: mode === 'dark' ? theme.palette.text.primary + 28 : theme.palette.grey[400]
                    },
                    '&:hover $notchedOutline': {
                        borderColor: theme.palette.primary.light
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: outlinedFilled ? bgColor : 'transparent',
                    padding: '15.5px 14px',
                    borderRadius: `${borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: `${borderRadius}px`
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: mode === 'dark' ? theme.palette.text.primary + 50 : theme.palette.grey[300]
                    }
                },
                mark: {
                    backgroundColor: theme.palette.background.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-tag': {
                        background: mode === 'dark' ? theme.palette.text.primary + 20 : theme.palette.secondary.light,
                        borderRadius: 4,
                        color: theme.palette.text.dark,
                        '.MuiChip-deleteIcon': {
                            color: mode === 'dark' ? theme.palette.text.primary + 80 : theme.palette.secondary[200]
                        }
                    }
                },
                popper: {
                    borderRadius: `${borderRadius}px`,
                    boxShadow: '0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.palette.divider,
                    opacity: mode === 'dark' ? 0.2 : 1
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    /** checked not prop
                     *"&.Mui-checked": {
                     *    fontSize: "28px"
                     *}
                     */
                }
            }
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    '& span': {
                        '& .MuiIconButton-root': {
                            backgroundColor: 'inherit',

                            '&:hover': {
                                backgroundColor: 'transparent'
                            },
                            '& svg': {
                                padding: '8px',
                                height: '34px',
                                width: '34px',
                                borderRadius: '29%',
                                color: 'white'
                            }
                        }
                    },

                    '& .MuiFormControl-root': {
                        background: outlinedFilled ? bgColor : 'transparent',
                        borderRadius: `${borderRadius}px`,
                        border: '1px solid',
                        borderColor: mode === 'dark' ? theme.palette.text.primary + 28 : theme.palette.primary.light,
                        '&:hover': {
                            borderColor: theme.palette.grey[400]
                        },
                        '& .MuiInputBase-root': {
                            fontWeight: 500,
                            outline: 0,
                            background: outlinedFilled ? bgColor : 'transparent',
                            padding: '6px 0px !important',
                            borderRadius: `${borderRadius}px`,
                            '&:before': {
                                border: '0 !important'
                            },
                            '&:after': {
                                border: '0 !important'
                            },
                            inputAdornedStart: {
                                paddingLeft: 4
                            }
                        },
                        notchedOutline: {
                            display: 'none',
                            borderRadius: `${borderRadius}px`
                        }
                    }
                }
            }
        },

        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    '& .MuiTableSortLabel-icon': {
                        opacity: 0.5
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.dark,
                    background: mode === 'dark' ? theme.palette.text.primary : theme.palette.primary[200]
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.dark,
                    fontSize: '16px'
                }
            }
        },
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    marginTop: 14,
                    marginBottom: 14
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        },
        MuiInternalDateTimePickerTabs: {
            styleOverrides: {
                tabs: {
                    backgroundColor: mode === 'dark' ? theme.palette.dark[900] : theme.palette.primary.light,
                    '& .MuiTabs-flexContainer': {
                        borderColor: mode === 'dark' ? theme.palette.text.primary + 20 : theme.palette.primary[200]
                    },
                    '& .MuiTab-root': {
                        color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.grey[900]
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: theme.palette.primary.dark
                    },
                    '& .Mui-selected': {
                        color: theme.palette.primary.dark
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    borderBottom: '1px solid',
                    borderColor: mode === 'dark' ? theme.palette.text.primary + 20 : theme.palette.grey[200]
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    padding: '12px 0 12px 0'
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head': {
                        textWrap: 'nowrap'
                    }
                }
            }
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderColor: mode === 'dark' ? theme.palette.text.primary + 15 : theme.palette.grey[200],
                    fontSize: '0.875rem',
                    color: theme.palette.grey[600],
                    fontWeight: 500,
                    textWrap: 'nowrap'
                }
            }
        },

        MuiTableBody: {
            styleOverrides: {
                root: {
                    '& .MuiIconButton-root': {
                        backgroundColor: 'inherit',
                        color: 'white',
                        '& .MuiSvgIcon-root': {
                            padding: '8px',
                            height: '30px',
                            width: '30px',
                            borderRadius: '29%'
                        }
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.palette.background.paper,
                    background: theme.palette.text.primary
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem'
                }
            }
        }
    };
}
