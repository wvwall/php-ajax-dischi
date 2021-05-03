
<?php 

include "db.php";

?>

<?php 
    foreach ($albums as $disco => $info) { ?>
        <div><?= $disco ?></div>
        <div><?= $info["poster"] ?></div>
        <div><?= $info["title"] ?></div>
        <div><?= $info["author"] ?></div>
        <div><?= $info["genre"] ?></div>
        <div><?= $info["year"] ?></div>
        <?php
        
    }
    ?> 

    
   
