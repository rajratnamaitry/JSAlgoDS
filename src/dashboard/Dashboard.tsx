import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Master } from '../class/master';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"
import TreeView from '@mui/lab/TreeView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import {
    Accordion,
    AccordionSummary,
    Fab,
    AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const TableSchema = { fileList: 'fileList' }
const master = new Master('EcnmB1tYRxvHj1mFWOsH')
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Algo and DS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme(
    {
        palette: {
            mode: 'dark',
        },
    }
);
type IfileList = {
    url?: string | undefined,
    codeProgram?: string,
    folder?: string,
    subfolder?: string,
    description?: string,
    question?: string,
    name: string
}
// const list = [
//     "binary_heap/Max_Binary_Heap_extract.js",
//     "binary_heap/Max_Binary_Heap_Insert.js",
//     "binary_heap/Priority_Queue.js",
//     "BTS/BST_bfs.js",
//     "BTS/BST_Classes.js",
//     "BTS/BST_dfs.js",
//     "BTS/BST_Find.js",
//     "BTS/BST_Insert.js",
//     "BTS/BST_longest.js",
//     "BTS/BST_remove.js",
//     "BTS/BTS_checkIfBal.js",
//     "divideAndConquer/countZeroes.js",
//     "divideAndConquer/findRotatedIndex.js",
//     "divideAndConquer/sortedFrequency.js",
//     "ds/instance_methods.js",
//     "ds/point_class.js",
//     "ds/student_class.js",
//     "dynamicPrograming/coin.js",
//     "dynamicPrograming/minCoinChange.js",
//     "frequency/autocomplete.js",
//     "frequency/constructNote.js",
//     "frequency/findAllDuplicates.js",
//     "frequency/findPair.js",
//     "frequency/frequencyCounter.js",
//     "graph/dijkstras_version2.js",
//     "graph/graphRemoveVertex.js",
//     "graph/graph_add_edge.js",
//     "graph/graph_add_vertex.js",
//     "graph/graph_BFS.js",
//     "graph/graph_DFS_iterative.js",
//     "graph/graph_DFS_recursive.js",
//     "graph/graph_remove_edge.js",
//     "graph/simplePriorityQueue.js",
//     "graph/weightedGraph.js",
//     "hash/basic_hash.js",
//     "hash/hash_table_keys_and_values.js",
//     "hash/hash_table_set_and_get.js",
//     "hash/improved_hash.js",
//     "recursive/capitalizeFirst.js",
//     "recursive/capitalizeWords.js",
//     "recursive/collectStrings.js",
//     "recursive/collect_odds_pure_recursion.js",
//     "recursive/factorial_recursive.js",
//     "recursive/flattenWrite.js",
//     "recursive/helper_method_recursion.js",
//     "recursive/isPalindrome.js",
//     "recursive/nestedEvenSum.js",
//     "recursive/power.js",
//     "recursive/productArray.js",
//     "recursive/recursiveRange.js",
//     "recursive/reverse.js",
//     "recursive/someRecursive.js",
//     "recursive/stringifyNumbers.js",
//     "search/binary_search.js",
//     "search/linear_search.js",
//     "search/string_search.js",
//     "sort/bubble_unoptimized.js",
//     "sort/InsertionSort.js",
//     "sort/mergeArrays.js",
//     "sort/mergeSort.js",
//     "sort/optimized_bubble.js",
//     "sort/pivot.js",
//     "sort/quicksort.js",
//     "sort/radix_helpers.js",
//     "sort/radix_sort.js",
//     "sort/selectionSort.js",
//     "tree_traversal/Breadth_FIrst_Tree.js",
//     "tree_traversal/Depth_First_Tree.js",
//     "list/dll/DLL_Classes.js",
//     "list/dll/DLL_Get.js",
//     "list/dll/DLL_Insert.js",
//     "list/dll/DLL_Pop.js",
//     "list/dll/DLL_Push.js",
//     "list/dll/DLL_remove.js",
//     "list/dll/DLL_reverse.js",
//     "list/dll/DLL_Set.js",
//     "list/dll/DLL_Shift.js",
//     "list/dll/DLL_Unshift.js",
//     "list/sll/Singly_Linked_List_Push.js",
//     "list/sll/sll_get.js",
//     "list/sll/sll_insert.js",
//     "list/sll/sll_pop.js",
//     "list/sll/sll_remove.js",
//     "list/sll/sll_rotate.js",
//     "list/sll/sll_set.js",
//     "list/stack/Queue.js",
//     "list/stack/Stack pop.js",
//     "list/stack/stackWithQueue.js",
//     "list/stack/Stack_push.js",
//     "trie/addWord.js",
//     "trie/findWord.js",
//     "trie/getWords.js",
//     "trie/removeWord.js"];
//     list.forEach(e=>{
//         master.post('fileList',{
//             name:e,
//             question:'',
//             description:'',
//             url:e
//         }).then(console.log)
//     })
function DashboardContent() {
    const [question, setQuestion] = React.useState<string | undefined>('');
    const [fileList, setFileList] = React.useState([{
            name: "",
            data: [{
                url: "",
                codeProgram: "",
                folder: "",
                subfolder: "",
                description: "",
                question: "",
                name: ""
            }]
        }]);
    const [codeRun, setCodeRun] = React.useState(``);
    const [codeOutput, setCodeOutput] = React.useState(`// output`);
    React.useEffect(() => {
        master.get(TableSchema.fileList).then(d => {
            const data = d.docs
                .map((doc: any) => {
                    return { id: doc.id, ...doc.data() }
                })
            const fre: any = {}
            const newList: any = []
            for (let ob of data) {
                fre[ob.folder] = (fre[ob.folder] || 0) + 1;
            }
            for (let name in fre) {
                newList.push({ name, data: data.filter(e => e.folder == name) });
            }
            console.log(newList)
            setExpanded('panel3');
            setFileList(newList)
        })
    }, [master]);
    const runFn = () => {
        const output = eval(codeRun);
        console.log('codeRun', codeRun)
        console.log(output, codeOutput)
        setCodeOutput(output);
    }
    const getFileContent = (url: any) => {
        fetch('./algo/' + url, {
            mode: 'no-cors',
            headers: {
                'content-type': 'text/html'
            }
        })
            .then(e => e.text())
            .then(e => setCodeRun(e)).catch(console.log);
    }
    const codeEditorChange = (e: string) => {
        setCodeRun(e);
    };
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={true}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Algorithm & Data Structures
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={true}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                        >
                            {fileList.map((el, index) => (
                                <TreeItem nodeId={""+index} label={el.name}>
                                    {el.data.map((mData:any,cIndex)=>
                                     <TreeItem nodeId={""+cIndex+20 } key={mData.name} label={mData.name} onClick={(e) => {
                                        getFileContent(mData.name);
                                        setQuestion(mData.question)
                                        }} />                                        
                                    )}
                                </TreeItem>
                            ))}
                        </TreeView>
                        <Divider sx={{ my: 1 }} />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Editor */}
                            <Accordion
                                expanded={expanded === 'panel1'}
                                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                                <AccordionSummary
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                >
                                    <Typography> Editor </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {question}
                                    </Typography>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: 899,
                                                height: 440,
                                            }}
                                        >
                                            <AceEditor
                                                width="100%"
                                                height="100%"
                                                wrapEnabled={true}
                                                placeholder="Placeholder Text"
                                                mode="javascript"
                                                theme="monokai"
                                                name="blah1"
                                                onChange={codeEditorChange}
                                                onLoad={runFn}
                                                fontSize={14}
                                                showPrintMargin={false}
                                                showGutter={true}
                                                highlightActiveLine={true}
                                                value={`function onLoad(editor) { 
                                            return "i've loaded"
                                        };
                                        onLoad()`}
                                                setOptions={{
                                                    enableBasicAutocompletion: true,
                                                    enableLiveAutocompletion: true,
                                                    enableSnippets: true,
                                                    showLineNumbers: true,
                                                    tabSize: 3,
                                                }} />
                                        </Paper>
                                    </Grid>
                                    <Fab color="primary" size="small" onClick={runFn}>
                                        <PlayArrowOutlinedIcon />
                                    </Fab >
                                    // Output
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 100,
                                            }}
                                        >
                                            <Typography>Output</Typography>
                                            <AceEditor
                                                width="100%"
                                                height="100%"
                                                wrapEnabled={true}
                                                placeholder="Placeholder Text"
                                                mode="java"
                                                theme="github"
                                                name="blah2"
                                                readOnly={true}
                                                // onLoad={console.log}
                                                // onChange={console.log}
                                                fontSize={10}
                                                showPrintMargin={false}
                                                showGutter={true}
                                                highlightActiveLine={false}
                                                value={codeOutput}
                                                setOptions={{
                                                    enableBasicAutocompletion: true,
                                                    enableLiveAutocompletion: true,
                                                    enableSnippets: true,
                                                    showLineNumbers: true,
                                                    tabSize: 3,
                                                }} />
                                        </Paper>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                                <AccordionSummary
                                    aria-controls='panel3-content'
                                    id='panel3-header'
                                    expandIcon={<ExpandMoreIcon />}>
                                    <Typography> Solutions </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <Paper
                                                sx={{
                                                    p: 2,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    width: 899,
                                                    height: 440,
                                                }}
                                            >
                                                <AceEditor
                                                    width="100%"
                                                    height="100%"
                                                    wrapEnabled={true}
                                                    placeholder="Placeholder Text"
                                                    mode="javascript"
                                                    theme="monokai"
                                                    name="blah3"
                                                    fontSize={14}
                                                    readOnly={true}
                                                    showPrintMargin={false}
                                                    showGutter={true}
                                                    highlightActiveLine={true}
                                                    value={codeRun}
                                                    setOptions={{
                                                        enableBasicAutocompletion: true,
                                                        enableLiveAutocompletion: true,
                                                        enableSnippets: true,
                                                        showLineNumbers: true,
                                                        tabSize: 3,
                                                    }} />
                                            </Paper>
                                        </Grid>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
