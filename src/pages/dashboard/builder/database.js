import { BsDatabaseSlash } from "react-icons/bs";
import AddDatabaseDialog from '@/components/dashboard/builder/database';

export default function Database({label="Database", icon}){
    return (
        <div className="border-2 border-dashed border-border p-4 rounded-xl h-full relative">
            <div className="flex flex-col w-full h-full justify-center items-center gap-2">
                <BsDatabaseSlash className="w-12 h-12 mb-4" />
                <div className="font-semibold text-xl">No <span className="font-bold text-primary">{label}</span> Added</div>
                <span>You have not added any podcasts. Add one below.</span>
                <AddDatabaseDialog />
            </div>
        </div>
    )
}