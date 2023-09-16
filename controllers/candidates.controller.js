const express = require('express'),  
     router = express.Router()

const service = require('../services/candidates.service')


     //http:localhost:4000/api/candidates/
     router.get('/', async (req, res) => {
        const candidates = await service.getAllCandidates()
         res.send(candidates)
     })

     router.get('/:id', async (req, res) => {
          const candidate = await service.getCandidateById(req.params.id)
          if(candidate.length == 0)
          res.status(201).json('no record with given id :' + req.params.id)
     else
           res.send(candidate)
       })


       router.put('/update', async (req, res) => {
          const candidate = await service.updateCandidate(req.params.id)
          if(candidate.length == 0)
          res.status(404).json('no record with given id :' + req.params.id)
     else
           res.send('updated successfully')
       })

       router.post('/login', async (req, res) => {
          const candidate = await service.getCandidateByEmail(req.body.email)
          if(candidate.length == 0)
          res.status(404).json('no record with given email :' + req.body.email)
     else
           res.send('login successfully')
       })

       router.delete('/delete', async (req, res) => {
          const candidate = await service.deleteCandidate(req.body.email)
          if(candidate.length == 0)
          res.status(404).json('no record with given email :' + req.body.email)
     else
           res.send('deleted successfully')
       })

       router.delete('/:id', async (req, res) => {
          const affectedRows = await service.deleteCandidate(req.params.id)
          if(affectedRows == 0)
          res.status(404).json('no record with given id :' + req.params.id)
      else
           res.send('deleted successfully')

       })
       router.post('/', async (req, res) => {
          await service.addOrEditCandidate(req.body)
          res.status(201).send('created successfully')
       })

       router.put('/:id', async (req, res) => {
       const affectedRows = await service.addOrEditCandidate(req.body, req.params.id)
       if(affectedRows == 0)
       res.status(404).json('no record with given id :' + req.params.id)
   else
        res.send('updated successfully')

       })


     module.exports = router;
