import test from 'ava'
import {
  getIssues
} from '../../service/http'

test('Issue一覧取得のテスト', async t => {
  const data = await getIssues()
  t.true( data.length > 0)
  for(let issue of data){
    t.truthy( issue.title)
  }
})

test('E2E', async t => {
  const data = await getIssues()
  t.true( data.length > 0)
  for(let issue of data){
    t.truthy( issue.title)
  }
})
