const UserItem = ({userName, email}) => {
    return (
        <div className="flex justify-between items-center border rounded-md p-2 flex-wrap">
            <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-300 text-secondary-foreground font-[700] flex items-center justify-center">
                <p>AI</p>
            </div>
            <div>
                <p className="text-[16px] text-primary font-bold">
                    {userName}
                </p>
                <p className="text-[12px] text-neutral-500">
                    {email}
                </p>
            </div>
        </div>
    );
}

export default UserItem;