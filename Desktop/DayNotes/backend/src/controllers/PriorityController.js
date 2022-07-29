const Annotations = require('../models/AnnotationData');

module.exports={

    async read(request, response){
        const priority = request.query;

        const priorityNotes = await Annotations.find(priority);

        return response.json(priorityNotes);

    }
}