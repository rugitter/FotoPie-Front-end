import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from 'react';
import { deletePost } from '../axiosRequest/api/posts';


interface Props {
    filename: string;
}
function DeletePost(props: Props) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const router = useRouter();
    const { filename } = props;



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
            router.push("/profile");
        }
    };

    const deleteBoxStyles = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <>
            <div style={deleteBoxStyles}>
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
            </div>
        </>
    );
}

export default DeletePost;