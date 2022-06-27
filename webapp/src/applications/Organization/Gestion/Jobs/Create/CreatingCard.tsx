import { DataUsageTwoTone } from '@mui/icons-material';
import {
    Button,
    Card,
    Box,
    Grid,
    Input,
    Typography,
    IconButton,
    Hidden,
    Avatar,
    Divider,
    ListItem,
    ListItemText,
    TextField,
    Container,
    List,
    ListItemAvatar,
    Autocomplete
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useContext, useState } from 'react';
import DateFnsProvider from 'src/components/DateFnsProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { createJob } from 'src/services/job.service';
import { useNavigate } from 'react-router-dom';
import { TagsContext } from 'src/contexts/TagsContext';

function CreatingCard() {

    const navigate = useNavigate();

    const tags = useContext(TagsContext);

    console.log(tags);
    

    const jobOptions = [
        'Environnement', 'Culture', 'Communication','Enseignement','Social'
       ];

    const [date, setDate] = useState<Date | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        createJob ({
            missionstype: data.get('missiontype'),
            tag: data.get('tag'),
            tokens: data.get('tokens'),
            startingdate: date,
        }) 

        .then (response => {
            if('error' in response) {
                console.log('error');
                return
            }
            navigate('/missions')
        })
    }

    return (
        <Container maxWidth="md">
            <Card>
                <Box p={4} component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="missionType"
                            label="Type de mission"
                            name="missionstype"
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                limitTags={2}
                                id="multiple-limit-tags"
                                options={jobOptions}
                                renderInput={(params) => (
                                    <TextField {...params} label="Choisissez un tag" placeholder="Favorites" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DateFnsProvider>
                                <DatePicker
                                    label="Date de commencement"
                                    value={date}
                                    onChange={(newDate) => {
                                    setDate(newDate);
                                    }}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </DateFnsProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                inputProps={{ min: 0 }}
                                label="Tokens gagnés"
                                type='number'
                                id="outlined-start-adornment"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">tokens</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                inputProps={{ min: 0 }}
                                type='number'
                                label="Nombre de places"
                                id="outlined-start-adornment"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">places</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                rows={4}
                                fullWidth
                                id="missionDescription"
                                label="Description"
                                name="missiondescription"
                            />
                        </Grid>
                        <label htmlFor="contained-button-file">
                            <Input style={{display:'none'}} id="contained-button-file" type="file" />
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                        {/* <TextField
                            name="upload-photo"
                            type="file"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Create your job
                        </Button>
                    </Grid>
                </Box>
            </Card>
        </Container>
    )
        
  }

export default CreatingCard;