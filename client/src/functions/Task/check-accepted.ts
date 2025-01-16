const checkAccepted = (users: string[], user: string) => {
    if (users.includes(user)) {
        return true;
    }else {
        return false;
    }
}

export default checkAccepted;