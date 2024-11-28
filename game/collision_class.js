
class Collision { 

    //! all entities need to have 'x', 'y', 'width', 'height'
    // entity1 = player or enemy
    // entity2 = platform, item

    isCollidingAABB(entity1, entity2){

        return ( 
            entity1.x < entity2.x + entity2.width &&
            entity1.x + entity1.width > entity2.x &&
            entity1.y < entity2.y + entity2.height &&
            entity1.y + entity1.height > entity2.y

        ); //returns true or false


    }
    
}