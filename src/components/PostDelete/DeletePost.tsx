import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getMe } from "../../axiosRequest/api/editUser";
import { deletePost } from '../../axiosRequest/api/userPost';
import { useCheckToken } from "../../hooks/useCheckToken";


interface Props {
    filename: string;
    userID: string;
}


const currentLoginUserId = async () => {
    try {
        const response = await getMe();
        const { id } = response.data;
        return id;
    } catch (error) {
    }
}
function DeletePost(props: Props) {
    useCheckToken();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isCurrentUserId, setIsCurrentUserId] = useState<boolean>(false);
    // const [currentUserId, setCurrentUserId] = useState<string | null>(null);
    const router = useRouter();
    const { filename, userID } = props;

    useEffect(() => {
        const fetchUserId = async () => {
            const trueUser = await currentLoginUserId();
            const isMatch = trueUser === userID;
            setIsCurrentUserId(isMatch);
        };

        fetchUserId();
    }, [userID])

    //useMemo (chatgpt optimization)
    // useEffect(() => {
    //     const fetchUserId = async () => {
    //       const trueUser = await currentLoginUserId();
    //       setCurrentUserId(trueUser);
    //     };

    //     fetchUserId();
    //   }, []);

    //   const isCurrentUserId = useMemo(() => {
    //     return currentUserId === userID;
    //   }, [currentUserId, userID]);

    const handleDeleteClick = async () => {
        setIsConfirmationOpen(true);
    };

    const handleConfirmationCancel = () => {
        setIsConfirmationOpen(false);
    };

    const handleConfirmationConfirm = async () => {
        setIsDeleting(true);
        try {
            const response = await deletePost(filename);


        } catch (error) {
            setIsDeleting(false);
        } finally {
            setIsConfirmationOpen(false);
            router.push(`/profile/${userID}`);
        }
    };

    const deleteBoxStyles = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <>
            {isAuthenticated && isCurrentUserId ? <div style={deleteBoxStyles}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDeleteClick}
                    disabled={isDeleting}
                    style={{ width: "15rem" }}
                >
                    {isDeleting ? 'Deleting...' : 'Delete Post'}
                </Button>
                <Dialog open={isConfirmationOpen} onClose={handleConfirmationCancel}>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogContent>
                        Are you sure you want to delete this post?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleConfirmationCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmationConfirm} color="secondary" autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div> : null}

        </>
    );
}

export default DeletePost;