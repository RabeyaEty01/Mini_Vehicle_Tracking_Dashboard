import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { AppBar, Box, Container, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// project imports
import LAYOUT_CONST from 'constant';
import useConfig from 'hooks/useConfig';
import { useDispatch, useSelector } from 'store';
import { drawerWidth } from 'store/constant';
import { openDrawer } from 'store/slices/menu';
import Header from './Header';
import Sidebar from './Sidebar';

// assets

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open, layout }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter + 200
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: layout === LAYOUT_CONST.VERTICAL_LAYOUT ? -(drawerWidth - 72) : '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            marginTop: layout === 'horizontal' ? 135 : 98
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginTop: 98
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px',
            marginTop: 98
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shorter + 200
        }),
        marginLeft: layout === 'horizontal' ? '20px' : 0,
        marginTop: layout === 'horizontal' ? 135 : 98,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.up('md')]: {
            marginTop: layout === 'horizontal' ? 135 : 98
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            marginTop: 98
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            marginTop: 98
        }
    })
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();

    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menu);
    const { container, drawerType, layout } = useConfig();

    useEffect(() => {
        if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
            dispatch(openDrawer(true));
        } else {
            dispatch(openDrawer(false));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerType]);

    useEffect(() => {
        if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
            dispatch(openDrawer(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (matchDownMd) {
            dispatch(openDrawer(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    const condition = layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd;

    const header = useMemo(
        () => (
            <Toolbar sx={{ p: condition ? '19px' : '25px' }}>
                <Header />
            </Toolbar>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [layout, matchDownMd]
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* header */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: 'background.default',
                    transition: drawerOpen ? theme.transitions.create('width') : 'none'
                }}
            >
                {header}
            </AppBar>

            {/* drawer */}
            {(layout === LAYOUT_CONST.VERTICAL_LAYOUT || matchDownMd) && <Sidebar />}

            {/* main content */}
            <Main theme={theme} open={drawerOpen} layout={layout}>
                <Container maxWidth={container ? 'lg' : false} {...(!container && { sx: { px: { xs: 0 } } })}>
                    <Outlet />
                </Container>
            </Main>
        </Box>
    );
};

export default MainLayout;
