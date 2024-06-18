import { useNewAccount } from '@/features/accounts/hooks/use-new-account'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { AccountForm } from '@/features/accounts/components/account-form'
import { insertAccountSchema } from '@/db/schema'
import { z } from 'zod'

const formSchema = insertAccountSchema.pick({ name: true })

type FormValues = z.input<typeof formSchema>

export function NewAccountSheet() {

    const { isOpen, onClose, onOpen } = useNewAccount()

    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

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
                <AccountForm onSubmit={onSubmit} disabled={false} />
            </SheetContent>
        </Sheet>
    )
}
