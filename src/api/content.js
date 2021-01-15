import axios from '@/libs/request'
import qs from 'qs'

// 内容管理 -> 文章管理
const getList = (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}

const deletePostById = (id) => {
  return axios.get('/content/delete?tid=' + id)
}

const updatePostById = (data) => {
  return axios.post('/content/update-id', data)
}

// 内容管理 -> 标签管理
const getTags = (options) => {
  return axios.get('/admin/get-tags?' + qs.stringify(options))
}

const addTag = (data) => {
  return axios.post('/admin/add-tag', data)
}

const removeTag = (id) => {
  return axios.get('/admin/remove-tag?ptid=' + id)
}

const updateTag = (data) => {
  return axios.post('/admin/edit-tag?', data)
}

export {
  getList,
  deletePostById,
  updatePostById,
  getTags,
  addTag,
  removeTag,
  updateTag
}
