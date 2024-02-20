import { type FC } from 'react'
import { Title, ListItem, BackButton } from '../components'
import { rules } from '../constants'

export const Rules: FC = () => (
  <>
    <Title text='NORMAS DEL CONCURSO' />
    <div className='px-6 dark:text-black'>
      <ul className='space-y-4'>
        <ListItem text={rules.first} letter='a' />
        <ListItem text={rules.second} letter='b' />
        <ListItem text={rules.third} letter='c' />
        <ListItem text={rules.forth} letter='d' />
        <ListItem text={rules.fith} letter='e' />
        <ListItem text={rules.sixth.rule} letter='f'>
          <ul className='pl-8'>
            <ListItem text={rules.sixth.criteria.first} letter='a' />
            <ListItem text={rules.sixth.criteria.second} letter='b' />
            <ListItem text={rules.sixth.criteria.third} letter='c' />
          </ul>
        </ListItem>
        <ListItem text={rules.seventh} letter='g' />
      </ul>
    </div>
    <BackButton />
  </>
)
