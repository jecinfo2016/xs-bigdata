import request from '@/utils/request'

export function getlist(query) {
  return request({
    url: '/api-file/module/list',
    method: 'post',
    data: query
  })
}
