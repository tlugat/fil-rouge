import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button
} from '@mui/material';

<<<<<<< HEAD
=======
import formatPhoneNumber from 'src/services/format.phone';
>>>>>>> 28ea075 (refacto-webapp: remove useless template cards in profile page)
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
<<<<<<< HEAD

function EditProfileTab() {

=======
import { useState } from 'react';
import { updateUser, updatePasswordUser, updateAvatarUser } from 'src/services/users.service';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import { getCurrentUser } from 'src/services/auth.service';
import { useSession } from 'src/hooks/useSession';
import { User } from 'src/models';

function EditProfileTab() {

  const [EditUser, setEditUser] = useState(false);
  const [valueEdit, setValueEdit] = useState({});
  const { user: currentUser } = useSession();
  const [editPassword, setEditPassword] = useState(false);
  const [user, setUser] = useState(currentUser);
  const [editAvatar, setEditAvatar] = useState(false);
  const [preview,setPreview] = useState<string | null>();

  const handleChangeEdit = (event: React.FormEvent<HTMLFormElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setValueEdit({
      ...valueEdit,
      [name]: value
    });
  };

  const handleEditUser = async () => {
    const updateResponse = await updateUser(user.id, valueEdit);
    if ('error' in updateResponse) return;
    setEditUser(false);
    const userResponse = await getCurrentUser();
    if ('error' in userResponse) return;
    setUser(userResponse as User);
  };

  const handleEditUserPassword = async () => {
    const updateResponse = await updatePasswordUser(valueEdit);
    if ('error' in updateResponse) return;
    setEditPassword(false);
    const userResponse = await getCurrentUser();
    if ('error' in userResponse) return;
    setUser(userResponse as User);
  };

  const handleEditUserAvatar = async () => {
    const updateResponse = await updateAvatarUser(valueEdit);
    if ('error' in updateResponse) return;
    setEditAvatar(false);
    const userResponse = await getCurrentUser();
    if ('error' in userResponse) return;
    setUser(userResponse as User);
  }

  const formatedPhoneNumber = (formatPhoneNumber(user.phone));
>>>>>>> 28ea075 (refacto-webapp: remove useless template cards in profile page)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="subtitle2">
                Manage informations related to your personal details
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>Craig Donin</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Date of birth:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>15 March 1977</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Address:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text color="black">
                      1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California,
                      93262
                    </Text>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Account Settings
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your account
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Language:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>English (US)</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Timezone:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>GMT +2</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Account status:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Label color="success">
                    <DoneTwoToneIcon fontSize="small" />
                    <b>Active</b>
                  </Label>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
<<<<<<< HEAD
=======
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary="Change Password"
                secondary="You can change your password here"
              />
              {!editPassword ? (
                <Button
                  onClick={() => setEditPassword(true)}
                  size="large"
                  variant="outlined"
                >
                  Change password
                </Button>
              ) : (
                <div>
                  <Button
                    variant="text"
                    color="success"
                    startIcon={<CheckIcon />}
                    onClick={handleEditUserPassword}
                  >
                    validé{' '}
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<CancelIcon />}
                    onClick={() => {
                      setEditPassword(false);
                    }}
                  >
                    annuler
                  </Button>
                </div>
              )}
            </ListItem>
            {editPassword && (
              <>
                <Divider />
                <ListItem sx={{ p: 3 }}>
                  <TextField
                    label="Old password"
                    type="password"
                    id="user-old-password"
                    name="old_password"
                    onChange={(e: any) => {
                      handleChangeEdit(e);
                    }}
                    variant="standard"
                    size="small"
                  />
                </ListItem>
                <ListItem sx={{ p: 3 }}>
                  <TextField
                    label="New password"
                    type="password"
                    id="user-password"
                    name="password"
                    onChange={(e: any) => {
                      handleChangeEdit(e);
                    }}
                    variant="standard"
                    size="small"
                  />
                </ListItem>
              </>
            )}
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
>>>>>>> 28ea075 (refacto-webapp: remove useless template cards in profile page)
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Email Addresses
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your associated email addresses
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>example@demo.com</b>
                  </Text>
                  <Box pl={1} component="span">
                    <Label color="success">Primary</Label>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>demo@example.com</b>
                  </Text>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileTab;
