import { useNewAccount } from '@/features/accounts/hooks/use-new-account'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

export function NewAccountSheet() {

    const { isOpen, onClose, onOpen } = useNewAccount()

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='space-y-4'>
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                    Create a new account
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
