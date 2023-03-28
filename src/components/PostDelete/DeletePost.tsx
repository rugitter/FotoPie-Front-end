import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getMe } from "../../axiosRequest/api/editUser";
import { deletePost } from '../../axiosRequest/api/userPost';
import { useCheckToken } from "../../hooks/useCheckToken";


interface DeletePostButtonProps {
    filenameString: string | string[] | undefined;
    // userID: string;
}


const currentLoginUserId = async () => {
    try {
        const response = await getMe();
        const { id } = response.data;
        return id;
    } catch (error) {
    }
}
const DeletePostButton: FC<DeletePostButtonProps> = ({ filenameString }) => {
    useCheckToken();

    const { userID, isAuthenticated } = useSelector((state: RootState) => ({
        ...state.auth,
        ...state.quickView,
    }));
    const [isDeleting, setIsDeleting] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isCurrentUserId, setIsCurrentUserId] = useState<boolean>(false);
    const [isDeleteSuccessful, setIsDeleteSuccessful] = useState(false);
    // const [currentUserId, setCurrentUserId] = useState<string | null>(null);
    const router = useRouter();

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
            const response = await deletePost(filenameString);
            setIsDeleteSuccessful(true);
            setTimeout(() => {
                setIsDeleteSuccessful(false);
                setIsConfirmationOpen(false);
                router.push(`/profile/${userID}`);
            }, 2000);
        } catch (error) {
            setIsDeleting(false);
        }
    };

    const deleteBoxStyles = {
        display: "flex",
        justifyContent: "center",
        marginTop: "5px",
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
                        {isDeleteSuccessful ? (
                            <DialogContentText>
                                Delete successful! Redirecting...
                            </DialogContentText>
                        ) : (
                            "Are you sure you want to delete this post?"
                        )}
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

export default DeletePostButton;