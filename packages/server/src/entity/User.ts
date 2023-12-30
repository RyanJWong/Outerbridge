/* eslint-disable */
import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { ObjectId } from 'mongodb'
import { Workflow } from './Workflow'
import { Execution } from './Execution'
import { IUser } from '../Interface'
import { Credential } from './Credential'
import { Webhook } from './Webhook'
import { Contract } from './Contract'
import { Wallet } from './Wallet'

@Entity()
export class User implements IUser {
    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    name: string

    @Column()
    workflow: Workflow

    @Column()
    execution: Execution

    @Column()
    credential: Credential

    @Column()
    webhook: Webhook

    @Column()
    contract: Contract

    @Column()
    wallet: Wallet

    @Column()    
    userName: string
}
