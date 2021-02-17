import { Account } from "@/domain/entities"
import { AccountModel } from "../models";

export interface AccountRepository {
  create: (data: Account) => Promise<AccountModel>
  findAll: () => Promise<AccountModel[]>
  findOne: (id: number) => Promise<AccountModel>
  findOneByEmail: (email: string) => Promise<AccountModel>
}