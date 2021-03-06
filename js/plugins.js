��f u n c t i o n   g e t R a n d o m I n t ( m i n ,   m a x )   { 
         r e t u r n   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   ( m a x   -   m i n   +   1 ) )   +   m i n ; 
 } 
 f u n c t i o n   s h u f f l e A r r a y ( a r r a y )   { 
         v a r   c u r r e n t I n d e x   =   a r r a y . l e n g t h ,   t e m p o r a r y V a l u e ,   r a n d o m I n d e x ; 
 
         w h i l e   ( 0   ! = =   c u r r e n t I n d e x )   { 
                 r a n d o m I n d e x   =   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   c u r r e n t I n d e x ) ; 
                 c u r r e n t I n d e x   - =   1 ; 
                 t e m p o r a r y V a l u e   =   a r r a y [ c u r r e n t I n d e x ] ; 
                 a r r a y [ c u r r e n t I n d e x ]   =   a r r a y [ r a n d o m I n d e x ] ; 
                 a r r a y [ r a n d o m I n d e x ]   =   t e m p o r a r y V a l u e ; 
         } 
 
         r e t u r n   a r r a y ; 
 } 
 v a r   m a i n N o w   =   0 ; 
 
 f u n c t i o n   a d d T o p L i n e ( i s M o b i l e )   { 
         i s M o b i l e   =   i s M o b i l e   ?   i s M o b i l e   :   f a l s e ; 
         v a r   a l l T o d a y   =   n e w   D a t e ( ) . g e t H o u r s ( )   *   1 0 0   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 0 0 0 ) ; 
         v a r   n o w   =   m a i n N o w   ! =   0   ?   m a i n N o w   :   g e t R a n d o m I n t ( 4 5 ,   1 5 0 ) ; 
         m a i n N o w   =   n o w ; 
         v a r   t o d a y B u y   =   g e t R a n d o m I n t ( 5 0 ,   1 0 0 )   +   n e w   D a t e ( ) . g e t H o u r s ( ) ; 
         i f   ( a l l T o d a y   < =   t o d a y B u y )   { 
                 t o d a y B u y   =   M a t h . f l o o r ( a l l T o d a y   /   2 )   +   2 ; 
         } 
         v a r   a l l H e i g h t   =   i s M o b i l e   ?   3 4   :   3 6 ; 
         v a r   h t m l   =   ' < s t y l e > . t o p - l i n e   s p a n . m o b i l e { h e i g h t :   3 5 p x ; p a d d i n g - t o p :   1 0 p x ; f o n t - s i z e :   1 2 p x   ! i m p o r t a n t ; b o x - s i z i n g :   b o r d e r - b o x ; } '   + 
                 ' b o d y { p a d d i n g - t o p : 3 4 p x   ! i m p o r t a n t ; } '   + 
                 ' . t o p - l i n e   s p a n { f o n t - f a m i l y :   A r i a l   ! i m p o r t a n t ; f o n t - s i z e : 2 1 p x   ! i m p o r t a n t ; } '   + 
                 ' . t o p - l i n e   . a l l - t o d a y . m o b i l e { d i s p l a y : n o n e ; } '   + 
                 ' . t m - b l o c k - n a v b a r { t o p :   3 6 p x   ! i m p o r t a n t ; } '   + 
                 ' . a l l - t o d a y { b a c k g r o u n d - i m a g e :   u r l ( h t t p : / / s t a t i c . b e s t - g o o o d s . r u / i m g / a l l . p n g ) ; h e i g h t :   2 8 p x ; p a d d i n g - l e f t :   4 5 p x ; b a c k g r o u n d - r e p e a t :   n o - r e p e a t ; b a c k g r o u n d - p o s i t i o n :   5 p x ; m a r g i n - l e f t :   1 0 p x ; d i s p l a y :   i n l i n e - b l o c k ; p a d d i n g - t o p :   8 p x ; m a r g i n - t o p :   0 ; } '   + 
                 ' . n o w { b a c k g r o u n d - i m a g e :   u r l ( h t t p : / / s t a t i c . b e s t - g o o o d s . r u / i m g / n o w . p n g ) ; h e i g h t :   2 8 p x ; p a d d i n g - l e f t :   4 5 p x ; b a c k g r o u n d - r e p e a t :   n o - r e p e a t ; b a c k g r o u n d - p o s i t i o n :   5 p x ; m a r g i n - l e f t :   1 0 p x ; d i s p l a y :   i n l i n e - b l o c k ; p a d d i n g - t o p :   8 p x ; m a r g i n - t o p :   0 ; b o r d e r - l e f t :   3 p x   s o l i d   # E 4 E 4 E 4 ; } '   + 
                 ' . t o d a y - b u y { b a c k g r o u n d - i m a g e :   u r l ( h t t p : / / s t a t i c . b e s t - g o o o d s . r u / i m g / b u y . p n g ) ; h e i g h t :   2 8 p x ; p a d d i n g - l e f t :   4 5 p x ; b a c k g r o u n d - r e p e a t :   n o - r e p e a t ; b a c k g r o u n d - p o s i t i o n :   5 p x ; m a r g i n - l e f t :   1 0 p x ; d i s p l a y :   i n l i n e - b l o c k ; p a d d i n g - t o p :   8 p x ; m a r g i n - t o p :   0 ; b o r d e r - l e f t :   3 p x   s o l i d   # E 4 E 4 E 4 ; } '   + 
                 ' . t o p - l i n e   . n o w . m o b i l e { b o r d e r - l e f t : 0 ; } < / s t y l e > '   + 
                 ' < d i v   c l a s s = " t o p - l i n e "   s t y l e = " o v e r f l o w :   h i d d e n ; b o x - s i z i n g :   b o r d e r - b o x ;   z - i n d e x :   9 9 9 9 9 ; h e i g h t : ' + a l l H e i g h t + ' p x ;   t e x t - a l i g n : c e n t e r ; b a c k g r o u n d :   # F 1 E D E E ;   p o s i t i o n :   f i x e d ;   w i d t h : 1 0 0 % ; t o p : 0 ;   l e f t : 0 ; " > '   + 
                 ' < d i v   s t y l e = " f o n t - s i z e :   2 1 p x ; c o l o r :   # 0 0 0 ; d i s p l a y : i n l i n e - b l o c k ; " > '   + 
                 ' < s p a n   c l a s s = " a l l - t o d a y   ' + ( i s M o b i l e   ?   ' m o b i l e '   :   ' ' ) + ' " > >A5B8B5;59  A53>4=O:   < s t r o n g > '   +   a l l T o d a y   +   ' < / s t r o n g > < / s p a n > '   + 
                 ' < s p a n   c l a s s = " n o w   ' + ( i s M o b i l e   ?   ' m o b i l e '   :   ' ' ) + ' " > !59G0A  =0  A09B5:   < s t r o n g > '   +   n o w   +   ' < / s t r o n g > < / s p a n > '   + 
                 ' < s p a n   c l a s s = " t o d a y - b u y   ' + ( i s M o b i l e   ?   ' m o b i l e '   :   ' ' ) + ' " > >:C?>:  A53>4=O:   < s t r o n g > '   +   t o d a y B u y   +   ' < / s t r o n g > < / s p a n > '   + 
                 ' < / d i v > < / d i v > ' ; 
         $ ( h t m l ) . a p p e n d T o ( $ ( d o c u m e n t . b o d y ) ) ; 
 } 
 f u n c t i o n   s h o w S w i m m e r ( )   { 
         v a r   c o u n t   =   m a i n N o w   ! =   0   ?   m a i n N o w   :   g e t R a n d o m I n t ( 4 5 ,   1 5 0 ) ; 
         v a r   b o t t o m   =   6 ; 
         i f   ( $ ( ' . d e l i v e r y - n o t i f y ' ) . l e n g t h )   { 
                 b o t t o m   =   8 8 ; 
         } 
         m a i n N o w   =   c o u n t ; 
         v a r   h t m l   =   ' < d i v   c l a s s = " s w i m m e r "   s t y l e = " f o n t - f a m i l y :   A r i a l ;   f o n t - s i z e :   1 2 p x ; z - i n d e x : 9 9 1 0 0 1 ; p o s i t i o n :   f i x e d ;   b o t t o m : '   +   b o t t o m   +   ' p x ; c o l o r : b l a c k ; l i n e - h e i g h t :   n o r m a l ;   l e f t :   6 p x ;   w i d t h : 2 6 5 p x ; h e i g h t :   7 3 p x ; b a c k g r o u n d :   # F F F F E A ;   b o r d e r - r a d i u s :   5 p x ;   b o r d e r : 1 p x   s o l i d   # 0 0 0 ;   p a d d i n g :   1 0 p x ; b o x - s i z i n g :   b o r d e r - b o x ; " > '   + 
                 ' < d i v   c l a s s = " c l o s e - s w i m m e r "   s t y l e = " c u r s o r : p o i n t e r ; w i d t h :   1 3 p x ; h e i g h t :   1 3 p x ; f o n t - s i z e :   2 2 p x ; l i n e - h e i g h t :   0 . 6 5 ; p o s i t i o n :   a b s o l u t e ; t o p :   1 0 p x ; r i g h t : 1 0 p x ;   b a c k g r o u n d :   w h i t e ; c o l o r : # 9 C 8 B 7 4 ; b o r d e r :   1 p x   s o l i d   # 9 C 8 B 7 4 ;   b o r d e r - r a d i u s :   3 p x ; " > & t i m e s ; < / d i v > '   + 
                 ' < i m g   s r c = " h t t p : / / s t a t i c . b e s t - g o o o d s . r u / i m g / s w i m m e r . p n g "   s t y l e = " w i d t h : 5 0 p x ;   h e i g h t :   5 0 p x ;   f l o a t :   l e f t ; p a d d i n g - r i g h t :   1 0 p x ; b o r d e r : 0 ; " > '   + 
                 ' !59G0A    '   +   c o u n t   +   '   ?>;L7>20B5;59  ?@>A<0B@820NB  MBC  AB@0=8FC  2<5AB5  A  20<8. '   + 
                 ' < / d i v > ' ; 
         $ ( h t m l ) . a p p e n d T o ( $ ( d o c u m e n t . b o d y ) ) ; 
         $ ( ' . c l o s e - s w i m m e r ' ) . o n ( ' c l i c k ' ,   f u n c t i o n   ( )   { 
                 $ ( ' . s w i m m e r ' ) . r e m o v e ( ) ; 
         } ) ; 
         s e t I n t e r v a l ( f u n c t i o n   ( )   { 
                 i f   ( $ ( ' . d e l i v e r y - n o t i f y ' ) . l e n g t h )   { 
                         $ ( ' . s w i m m e r ' ) . c s s ( ' b o t t o m ' ,   8 8 ) ; 
                 }   e l s e   { 
                         $ ( ' . s w i m m e r ' ) . c s s ( ' b o t t o m ' ,   6 ) ; 
                 } 
         } ,   1 0 0 0 ) ; 
 } 
 f u n c t i o n   f r e e z e M o n e y ( b a l a n c e ,   d o l l a r )   { 
         v a r   h t m l   =   ' < s t y l e > '   + 
                 ' . f r e e z i n g - i n f o - p a c k a g e s   { f o n t - s i z e :   2 0 p x ; c o l o r :   # 0 0 0 0 0 0 ; p a d d i n g - t o p :   1 2 p x ; z - i n d e x :   2 ; p o s i t i o n :   r e l a t i v e ; l i n e - h e i g h t :   1 ; } '   + 
                 ' . f r e e z i n g - c l o s e   { p o s i t i o n :   a b s o l u t e ; t o p :   - 1 4 p x ; r i g h t :   4 p x ; w i d t h :   2 0 p x ; h e i g h t :   2 0 p x ; d i s p l a y :   b l o c k ; } '   + 
                 ' . f r e e z i n g - i n f o : b e f o r e   { c o n t e n t :   " " ; p o s i t i o n :   a b s o l u t e ; h e i g h t :   1 9 8 p x ; w i d t h :   2 8 0 p x ; t o p :   0 ; r i g h t :   0 ; m a r g i n - t o p :   - 2 6 p x ; b a c k g r o u n d :   u r l ( " h t t p : / / s t a t i c . b e s t - g o o o d s . r u / i m g / b u y e r - i c e . p n g " )   n o - r e p e a t ; } '   + 
                 ' . f r e e z i n g - i n f o { f o n t - f a m i l y :   A r i a l ;   z - i n d e x :   9 9 1 0 0 0 ; c o l o r :   b l a c k ; w i d t h :   3 2 9 p x ; h e i g h t :   1 2 5 p x ; p o s i t i o n :   f i x e d ; b a c k g r o u n d :   u r l ( " h t t p : / / s t a t i c . b e s t - g o o o d s . r u / i m g / b u y e r - b g . p n g " )   n o - r e p e a t ; b o x - s i z i n g :   b o r d e r - b o x ; p a d d i n g :   1 0 p x   3 0 p x ; t o p : 5 6 p x ; r i g h t : 0 ; b o r d e r :   0 ; f o n t - s i z e :   1 0 0 % ; f o n t :   i n h e r i t ; v e r t i c a l - a l i g n :   b a s e l i n e ; } '   + 
                 ' . f r e e z i n g - i n f o - p r i c e   { f o n t - s i z e :   2 2 p x ; c o l o r :   # 0 2 a c e d ; z - i n d e x :   2 ; p o s i t i o n :   r e l a t i v e ; m a r g i n - l e f t :   3 p x ; } '   + 
                 ' . f r e e z i n g - i n f o - t i t l e   { f o n t - s i z e :   2 1 p x ; c o l o r :   # 0 0 0 0 0 0 ; z - i n d e x :   2 ; p o s i t i o n :   r e l a t i v e ; t e x t - t r a n s f o r m :   u p p e r c a s e ; l i n e - h e i g h t :   1 . 3 ; } '   + 
                 ' . f r e e z i n g - c l o s e : b e f o r e   { - w e b k i t - t r a n s f o r m :   r o t a t e ( 4 5 d e g ) ; - m s - t r a n s f o r m :   r o t a t e ( 4 5 d e g ) ; t r a n s f o r m :   r o t a t e ( 4 5 d e g ) ; } '   + 
                 ' . f r e e z i n g - c l o s e : a f t e r   { - w e b k i t - t r a n s f o r m :   r o t a t e ( - 4 5 d e g ) ; - m s - t r a n s f o r m :   r o t a t e ( - 4 5 d e g ) ; t r a n s f o r m :   r o t a t e ( - 4 5 d e g ) ; } '   + 
                 ' . f r e e z i n g - c l o s e : b e f o r e ,   '   + 
                 ' . f r e e z i n g - c l o s e : a f t e r   { c o n t e n t :   " " ; p o s i t i o n :   a b s o l u t e ; w i d t h :   1 0 0 % ; h e i g h t :   2 p x ; b a c k g r o u n d :   # f f f f f f ; } '   + 
                 ' < / s t y l e > '   + 
                 ' < d i v   c l a s s = " f r e e z i n g - i n f o " > '   + 
                 ' < d i v   c l a s s = " f r e e z i n g - i n f o - t i t l e " > K  70<>@>78;8  F5=C! < / d i v > '   + 
                 ' < d i v   c l a s s = " f r e e z i n g - i n f o - p r i c e " > 1 $   =   < s p a n   c l a s s = " d y n a m i c - f r e e z i n g - i n f o - - p r i c e " > '   +   d o l l a r   +   '   @C1;59< / s p a n > < / d i v > '   + 
                 ' < d i v   c l a s s = " f r e e z i n g - i n f o - p a c k a g e s " > AB0;>AL  < s p a n   c l a s s = " p a c k a g e s - c o u n t " > '   +   b a l a n c e   +   ' < / s p a n >   HBC:  < b r > ?>  AB0@><C  :C@AC'   + 
                 ' < / d i v > '   + 
                 ' < a   h r e f = " # c l o s e "   c l a s s = " f r e e z i n g - c l o s e " > < / a > '   + 
                 ' < / d i v > ' ; 
         $ ( h t m l ) . a p p e n d T o ( $ ( d o c u m e n t . b o d y ) ) ; 
         $ ( ' . f r e e z i n g - c l o s e ' ) . o n ( ' c l i c k ' ,   f u n c t i o n   ( e )   { 
                 $ ( ' . f r e e z i n g - i n f o ' ) . r e m o v e ( ) ; 
                 e . p r e v e n t D e f a u l t ( ) ; 
                 e . s t o p P r o p a g a t i o n ( ) ; 
         } ) ; 
 } 